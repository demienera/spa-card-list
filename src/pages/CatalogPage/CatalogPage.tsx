import { useEffect, useState } from "react";
import { Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchFavoriteGamesThunk,
  fetchGamesThunk,
  clearFavoriteGames,
  removeGame,
} from "../../app/slices/games/slice";
import {
  gamesSelector,
  favoriteGamesSelector,
  totalGamesSelector,
  isLoadingGamesSelector,
  isFavoritesLoadingSelector,
} from "../../app/slices/games/slice";
import { favoritesSelector } from "../../app/slices/favorites/slice";
import { CardsGrid } from "../../components/CardsGrid";
import { ItemsPagination } from "../../components/ItemsPagination";
import { CategoriesToggle } from "../../components/CategoriesToggle";
import { MAX_PAGES, PAGE_SIZE } from "./constants";
import { useCatalogPageStyles } from "./styles";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const styles = useCatalogPageStyles();
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);

  const favorites = useAppSelector(favoritesSelector);
  const games = useAppSelector(gamesSelector);
  const favoriteGames = useAppSelector(favoriteGamesSelector);
  const total = useAppSelector(totalGamesSelector);
  const isLoading = useAppSelector(isLoadingGamesSelector);
  const isFavoritesLoading = useAppSelector(isFavoritesLoadingSelector);

  const displayedGames = showFavorites
    ? favoriteGames.filter(g => favorites.includes(g.id))
    : games;
  const isEmpty = !displayedGames.length;
  const isLoadingData = showFavorites ? isFavoritesLoading : isLoading;

  useEffect(() => {
    if (!showFavorites) {
      dispatch(fetchGamesThunk(page)).unwrap();
    }
  }, [dispatch, page, showFavorites]);

  const handleShowFavorites = (value: "all" | "favorites") => {
    const show = value === "favorites";
    setShowFavorites(show);

    if (show) {
      favorites.length
        ? dispatch(fetchFavoriteGamesThunk(favorites))
        : dispatch(clearFavoriteGames());
    }
  };

  const handleDelete = (id: number) => dispatch(removeGame(id));

  return (
    <div style={styles.container}>
      <CategoriesToggle
        value={showFavorites ? "favorites" : "all"}
        onChange={handleShowFavorites}
      />

      {isLoadingData ? (
        <Spin size="large" fullscreen style={styles.spin} />
      ) : (
        <>
          <CardsGrid
            games={displayedGames}
            isFavoriteView={showFavorites}
            onDelete={handleDelete}
          />
          {!showFavorites && !isEmpty && (
            <ItemsPagination
              currentPage={page}
              total={Math.min(total, PAGE_SIZE * MAX_PAGES)}
              onChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};
