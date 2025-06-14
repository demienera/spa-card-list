import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";
import { getPageTitleStyles } from "./styles";

const { Title } = Typography;

interface PageTitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  isMain?: boolean;
}

export const PageTitle = ({
  level = 3,
  children,
  isMain = false,
}: PageTitleProps) => {
  const styles = getPageTitleStyles(isMain);

  return (
    <Title level={level} style={{ ...styles.base }}>
      {children}
    </Title>
  );
};
