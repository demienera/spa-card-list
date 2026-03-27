import { useMemo, useState } from "react";
import { Button } from "antd";
import { useSearchParams } from "react-router-dom";
import { CardsGrid } from "../../components/CardsGrid";
import { ItemsPagination } from "../../components/ItemsPagination";
import { CategoriesToggle } from "../../components/CategoriesToggle";
import { useCatalogData } from "../../hooks/useCatalogData";
import { useCatalogPageStyles } from "./styles";
import { ContentLoader } from "../../components/ContentLoader";
import { CreateGameModal } from "../../components/CreateGameModal";
import { MAX_PAGES, PAGE_SIZE } from "./constants";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const styles = useCatalogPageStyles();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const viewParam = searchParams.get("view");
  const showFavorites = useMemo(() => viewParam === "favorites", [viewParam]);
  const {
    displayedGames,
    total,
    isEmpty,
    isLoadingData,
    page,
    setPage,
    handleDelete,
  } = useCatalogData(showFavorites);
  const maxTotalItems = Math.min(total, MAX_PAGES * PAGE_SIZE);

  const handleViewChange = (value: "all" | "favorites") => {
    const next = new URLSearchParams(searchParams);
    if (value === "favorites") next.set("view", "favorites");
    else next.delete("view");
    setSearchParams(next, { replace: true });
  };

  return (
    <div style={styles.container}>
      <div style={styles.catalogTop}>
        <CategoriesToggle
          value={showFavorites ? "favorites" : "all"}
          onChange={handleViewChange}
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
