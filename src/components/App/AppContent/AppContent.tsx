import { Content } from "antd/es/layout/layout";
import { useAppContentStyles } from "./styles";

interface AppContentProps {
  children: React.ReactNode;
}

export const AppContent = ({ children }: AppContentProps) => {
  const styles = useAppContentStyles();

  return (
    <Content style={styles.content}>
      <div style={styles.container}>{children}</div>
    </Content>
  );
};
