import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getGamesApi, getGameByIdApi } from "../../../utils/api";
import { Game } from "../../../utils/types";

export const fetchGamesThunk = createAsyncThunk(
  "games/getGames",
  async (page: number = 1, { rejectWithValue }) => {
    try {
      return await getGamesApi(page);
    } catch (e) {
      return rejectWithValue(
        e instanceof Error ? e.message : "Failed to fetch games",
      );
    }
  },
);

export const fetchFavoriteGamesThunk = createAsyncThunk(
  "games/fetchFavorites",
  async (ids: number[], { rejectWithValue }) => {
    try {
      const results = await Promise.all(
        ids.map(id =>
          getGameByIdApi(id).catch(e => {
            console.error(`Failed to fetch game ${id}:`, e);
            return null;
          }),
        ),
      );
      return results.filter(Boolean) as Game[];
    } catch (e) {
      return rejectWithValue(
        e instanceof Error ? e.message : "Failed to fetch favorites",
      );
    }
  },
);

export type GamesState = {
  allGames: Game[];
  currentGames: Game[];
  favoriteGames: Game[];
  isLoading: boolean;
  isFavoritesLoading: boolean;
  total: number;
  currentPage: number;
  error: string | null;
};

const initialState: GamesState = {
  allGames: [],
  currentGames: [],
  favoriteGames: [],
  isLoading: false,
  isFavoritesLoading: false,
  total: 0,
  currentPage: 1,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  selectors: {
    gamesSelector: state => state.currentGames,
    allGamesSelector: state => state.allGames,
    favoriteGamesSelector: state => state.favoriteGames,
    isLoadingGamesSelector: state => state.isLoading,
    isFavoritesLoadingSelector: state => state.isFavoritesLoading,
    totalGamesSelector: state => state.total,
  },
  reducers: {
    removeGame(state, action: PayloadAction<number>) {
      state.allGames = state.allGames.filter(
        game => game.id !== action.payload,
      );
      state.favoriteGames = state.favoriteGames.filter(
        game => game.id !== action.payload,
      );
      state.currentGames = state.currentGames.filter(
        game => game.id !== action.payload,
      );
    },
    clearError(state) {
      state.error = null;
    },
    clearFavoriteGames(state) {
      state.favoriteGames = [];
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteGames = state.favoriteGames.filter(
        game => game.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGamesThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGamesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchGamesThunk.fulfilled, (state, action) => {
        const newGames = action.payload.results;
        state.currentGames = newGames;
        state.currentPage = action.meta.arg;

        const existingIds = new Set(state.allGames.map(g => g.id));
        const uniqueNewGames = newGames.filter(
          game => !existingIds.has(game.id),
        );
        state.allGames = [...state.allGames, ...uniqueNewGames];

        state.total = action.payload.count;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteGamesThunk.pending, state => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoriteGamesThunk.rejected, (state, action) => {
        state.isFavoritesLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchFavoriteGamesThunk.fulfilled, (state, action) => {
        state.isFavoritesLoading = false;
        const newFavorites = action.payload;
        state.favoriteGames = newFavorites;
      });
  },
});

export const {
  gamesSelector,
  allGamesSelector,
  favoriteGamesSelector,
  isLoadingGamesSelector,
  isFavoritesLoadingSelector,
  totalGamesSelector,
} = gamesSlice.selectors;
export const {
  removeGame,
  clearError,
  clearFavoriteGames,
  removeFromFavorites,
} = gamesSlice.actions;
export default gamesSlice.reducer;
