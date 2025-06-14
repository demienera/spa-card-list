import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { AppHeader } from "../AppHeader";
import { AppContent } from "../AppContent";
import { AppFooter } from "../AppFooter";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CatalogPage } from "../../pages/CatalogPage/CatalogPage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";
import { useAppLayoutStyles } from "./styles";

export const AppLayout = () => {
  const styles = useAppLayoutStyles();
  return (
    <Layout style={styles.layout}>
      <AppHeader />
      <AppContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<CatalogPage />} />
          <Route path="/game/:id" element={<DetailsPage />} />
        </Routes>
      </AppContent>
      <AppFooter />
    </Layout>
  );
};
