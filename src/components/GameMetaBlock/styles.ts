import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useGameMetaBlockStyles = (customColor?: string) => {
  const { token } = useToken();
  const color = customColor || token.colorPrimary;

  return {
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12,
    } as CSSProperties,
    label: {
      color: token.colorTextHeading,
      fontSize: 16,
    } as CSSProperties,
    tagWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
    } as CSSProperties,
    tag: {
      borderRadius: 20,
      margin: 0,
      padding: "4px 12px",
      borderColor: `${token.colorPrimary}50`,
      color,
      backgroundColor: `${token.colorPrimary}20`,
    } as CSSProperties,
  };
};
