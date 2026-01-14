import { Spin, Empty } from "antd";
import { useContentLoaderStyles } from "./styles";

interface Props {
  loading: boolean;
  isEmpty: boolean;
  children: React.ReactNode;
  fullscreen?: boolean;
}

export const ContentLoader = ({
  loading,
  isEmpty,
  children,
  fullscreen = false,
}: Props) => {
  const styles = useContentLoaderStyles(fullscreen);

  if (loading) {
    return (
      <div style={styles.loaderStyle}>
        <Spin size="large" />
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div style={styles.emptyWrapper}>
        <Empty description="Здесь ничего нет" />
      </div>
    );
  }
  return <div style={styles.childrenWrapper}>{children}</div>;
};
