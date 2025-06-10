import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGamesApi } from "../../../utils/api";
import { Game } from "../../../utils/types";

export const fetchGamesThunk = createAsyncThunk("games/getGames", async () =>
  getGamesApi(),
);

export type GamesState = {
  games: Game[];
  isLoading: boolean;
  error: string | null;
};

export const initialState: GamesState = {
  games: [],
  isLoading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  selectors: {
    gamesSelector: state => state.games,
    isLoadingGamesSelector: state => state.isLoading,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGamesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGamesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message!;
      })
      .addCase(fetchGamesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.games = action.payload;
      });
  },
});

export const { gamesSelector, isLoadingGamesSelector } = gamesSlice.selectors;
export default gamesSlice.reducer;
