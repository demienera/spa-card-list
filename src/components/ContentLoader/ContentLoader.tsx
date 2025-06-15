import { Spin, Empty } from "antd";

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
  if (loading) {
    return (
      <Spin size="large" fullscreen={fullscreen} style={{ paddingTop: 80 }} />
    );
  }
  if (isEmpty) {
    return <Empty description="Здесь ничего нет" />;
  }
  return <>{children}</>;
};
