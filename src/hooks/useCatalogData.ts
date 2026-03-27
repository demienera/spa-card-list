import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchGamesThunk,
  removeGame,
  totalGamesSelector,
  isLoadingGamesSelector,
  currentGamesSelector,
} from "../app/slices/games/slice";
import {
  favoritesGamesSelector,
  removeFavorite,
  loadFavoritesFromStorage,
} from "../app/slices/favorites/slice";

export const useCatalogData = (showFavorites: boolean) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const currentGames = useAppSelector(currentGamesSelector);
  const favoritesGames = useAppSelector(favoritesGamesSelector);
  const total = useAppSelector(totalGamesSelector);
  const isLoading = useAppSelector(isLoadingGamesSelector);

  // Гидратация избранного из localStorage при монтировании приложения/страницы
  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  const displayedGames = useMemo(() => {
    return showFavorites ? favoritesGames : currentGames;
  }, [showFavorites, favoritesGames, currentGames]);

  useEffect(() => {
    if (showFavorites) return;
    dispatch(fetchGamesThunk(page));
  }, [dispatch, page, showFavorites]);

  const isEmpty = !displayedGames.length;
  const isLoadingData = showFavorites ? false : isLoading;

  const handleDelete = (id: number) => {
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
    handleDelete,
  };
};
