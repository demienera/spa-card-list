import { CSSProperties } from "react";

export const useCardItemStyles = () => {
  return {
    card: {
      minWidth: 200,
      width: "100%",
      height: "100%",
      position: "relative",
    } as CSSProperties,
    likeIcon: (liked: boolean): CSSProperties =>
      ({
        position: "absolute",
        top: 12,
        right: 12,
        fontSize: 22,
        color: liked ? "#eb2f96" : "#999",
        cursor: "pointer",
      }) as CSSProperties,
    deleteIcon: {
      position: "absolute",
      top: 12,
      left: 12,
      fontSize: 20,
      color: "#999",
      cursor: "pointer",
    } as CSSProperties,
    cardTitle: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "block",
      maxWidth: "100%",
      fontSize: 19,
    } as CSSProperties,
    cardImg: {
      height: 180,
      objectFit: "cover",
    } as CSSProperties,
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
