import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchGamesThunk,
  removeGame,
  totalGamesSelector,
  isLoadingGamesSelector,
  isFavoritesLoadingSelector,
  allGamesSelector,
  currentGamesSelector,
} from "../app/slices/games/slice";
import {
  favoritesSelector,
  removeFavorite,
} from "../app/slices/favorites/slice";
import { Game } from "../utils/types";

export const useCatalogData = () => {
  const dispatch = useAppDispatch();
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);

  const [localGames, setLocalGames] = useState<Game[]>(() => {
    try {
      const stored = localStorage.getItem("createdGames");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("createdGames", JSON.stringify(localGames));
  }, [localGames]);

  const currentGames = useAppSelector(currentGamesSelector);
  const allGames = useAppSelector(allGamesSelector);
  const favorites = useAppSelector(favoritesSelector);
  const total = useAppSelector(totalGamesSelector);
  const isLoading = useAppSelector(isLoadingGamesSelector);
  const isFavoritesLoading = useAppSelector(isFavoritesLoadingSelector);

  const displayedGames = useMemo(() => {
    if (showFavorites) {
      return allGames.filter(game => favorites.includes(game.id));
    }

    const localGamesForPage = localGames.slice((page - 1) * 20, page * 20);
    const apiGames = currentGames;

    const remainingSlots = 20 - localGamesForPage.length;
    const apiGamesForPage = apiGames.slice(0, remainingSlots);

    return [...localGamesForPage, ...apiGamesForPage];
  }, [showFavorites, allGames, favorites, currentGames, page, localGames]);

  useEffect(() => {
    if (!showFavorites) {
      dispatch(fetchGamesThunk(page));
    }
  }, [dispatch, page, showFavorites]);

  const isEmpty = !displayedGames.length;
  const isLoadingData = showFavorites ? isFavoritesLoading : isLoading;

  const handleShowFavorites = (value: "all" | "favorites") => {
    setShowFavorites(value === "favorites");
  };

  const handleDelete = (id: number) => {
    setLocalGames(prev => prev.filter(game => game.id !== id));

    dispatch(removeGame(id));
    dispatch(removeFavorite(id));
  };

  return {
    displayedGames,
    total,
    isEmpty,
    isLoadingData,
    showFavorites,
    page,
    setPage,
    handleShowFavorites,
    handleDelete,
  };
};
