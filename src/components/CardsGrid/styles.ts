import { CSSProperties } from "react";

export const useCardsGridStyles = () => {
  return {
    emptyWrapper: {
      minHeight: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    } as CSSProperties,
  };
};
