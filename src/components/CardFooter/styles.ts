import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useCardFooterStyles = () => {
  const { token } = useToken();

  return {
    cardContent: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column" as const,
      gap: 10,
    } as CSSProperties,
    cardGenreWrapper: {
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      gap: 8,
    } as CSSProperties,
    cardGenre: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "inline",
      maxWidth: "100%",
      color: token.colorTextSecondary,
      fontSize: 13,
    } as CSSProperties,
    cardTag: {
      flexShrink: 0,
      color: token.colorTextSecondary,
      fontSize: 14,
    } as CSSProperties,
    cardDataWrapper: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    } as CSSProperties,
    cardDataIcon: {
      flexShrink: 0,
      color: token.colorTextSecondary,
      fontSize: 14,
    } as CSSProperties,
  };
};
