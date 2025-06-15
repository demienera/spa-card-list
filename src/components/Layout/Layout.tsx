import { Layout } from "antd";
import { AppContent } from "../App/AppContent";
import { AppHeader } from "../App/AppHeader";
import { AppFooter } from "../App/AppFooter";
import { AppRoutes } from "../../app/routes/routes";
import { useAppLayoutStyles } from "./styles";

export const AppLayout = () => {
  const styles = useAppLayoutStyles();
  return (
    <Layout style={styles.layout}>
      <AppHeader />
      <AppContent>
        <AppRoutes />
      </AppContent>
      <AppFooter />
    </Layout>
  );
};
