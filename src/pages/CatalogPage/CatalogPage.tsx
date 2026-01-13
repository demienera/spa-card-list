import { useEffect, useState } from "react";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { CardsGrid } from "../../components/CardsGrid";
import { ItemsPagination } from "../../components/ItemsPagination";
import { CategoriesToggle } from "../../components/CategoriesToggle";
import { useCatalogData } from "../../hooks/useCatalogData";
import { useCatalogPageStyles } from "./styles";
import { ContentLoader } from "../../components/ContentLoader";
import { CreateGameModal } from "../../components/CreateGameModal";
import { MAX_PAGES, PAGE_SIZE } from "./constants";

const CatalogPage = () => {
  const location = useLocation();
  const styles = useCatalogPageStyles();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const {
    displayedGames,
    total,
    isEmpty,
    isLoadingData,
    showFavorites,
    page,
    setPage,
    handleShowFavorites,
    handleDelete,
  } = useCatalogData();
  const maxTotalItems = Math.min(total, MAX_PAGES * PAGE_SIZE);

  useEffect(() => {
    if (location.state?.showFavorites && !showFavorites) {
      handleShowFavorites("favorites");
    }
  }, [location.state, showFavorites, handleShowFavorites]);

  return (
    <div style={styles.container}>
      <div style={styles.catalogTop}>
        <CategoriesToggle
          value={showFavorites ? "favorites" : "all"}
          onChange={handleShowFavorites}
        />
        <Button
          type="primary"
          onClick={() => setIsCreateModalOpen(true)}
          style={styles.addButton}
        >
          + Добавить игру
        </Button>
      </div>

      <CreateGameModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <div style={styles.contentWrapper}>
        <ContentLoader
          loading={isLoadingData}
          isEmpty={isEmpty}
          fullscreen={false}
        >
          <>
            <CardsGrid
              games={displayedGames}
              onDelete={handleDelete}
              isFavoriteView={showFavorites}
            />
            {!showFavorites && (
              <ItemsPagination
                currentPage={page}
                total={maxTotalItems}
                onChange={setPage}
              />
            )}
          </>
        </ContentLoader>
      </div>
    </div>
  );
};

export default CatalogPage;
