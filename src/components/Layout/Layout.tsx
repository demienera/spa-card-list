import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { AppHeader } from "../AppHeader";
import { AppContent } from "../AppContent";
import { AppFooter } from "../AppFooter";
import { HomePage } from "../../pages/HomePage/HomePage";
import { useAppLayoutStyles } from "./styles";

export const AppLayout = () => {
  const styles = useAppLayoutStyles();
  return (
    <Layout style={styles.layout}>
      <AppHeader />
      <AppContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContent>
      <AppFooter />
    </Layout>
  );
};
