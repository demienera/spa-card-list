import { Layout, Typography } from "antd";
import { getFullYear } from "../../../utils/utils";
import { useAppFooterStyles } from "./styles";

const { Footer } = Layout;
const { Text } = Typography;

export const AppFooter = () => {
  const styles = useAppFooterStyles();

  return (
    <Footer style={styles.footer}>
      <Text>
        MyGames ©{getFullYear()} Created by{" "}
        <a
          href="https://github.com/demienera"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          demienera
        </a>
      </Text>
    </Footer>
  );
};
