import { CSSProperties } from "react";

export const useCardFooterStyles = () => {
  return {
    cardContent: {
      marginTop: 12,
    } as CSSProperties,
    cardGenreWrapper: {
      marginTop: 8,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    } as CSSProperties,
    cardGenre: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "inline",
      maxWidth: "100%",
    } as CSSProperties,
    cardTag: {
      marginRight: 6,
      flexShrink: 0,
    } as CSSProperties,
    cardDataWrapper: {
      marginTop: 8,
    } as CSSProperties,
    cardDataIcon: {
      marginRight: 6,
    } as CSSProperties,
  };
};
