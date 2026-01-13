import { CSSProperties } from "react";

export const useGameImageStyles = () => {
  return {
    container: {
      width: "100%",
      marginBottom: 24,
    } as CSSProperties,
    image: {
      width: "100%",
      borderRadius: 12,
    } as CSSProperties,
    placeholderIcon: {
      fontSize: 52,
      color: "#999",
    } as CSSProperties,
    placeholderStyle: {
      backgroundColor: "#e8e8e8",
    } as CSSProperties,
  };
};
