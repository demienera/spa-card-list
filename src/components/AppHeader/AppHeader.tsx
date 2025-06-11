import { Layout } from "antd";
import { AppLogo } from "../AppLogo";
import { useAppHeaderStyles } from "./styles";

const { Header } = Layout;

export const AppHeader = () => {
  const styles = useAppHeaderStyles();

  return (
    <Header style={styles.header}>
      <AppLogo text="MyGames" />
    </Header>
  );
};
