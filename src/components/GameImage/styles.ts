import { CSSProperties } from "react";

export const useGameImageStyles = () => {
  return {
    container: {
      position: "relative",
      marginBlockEnd: 32,
      borderRadius: 12,
      maxHeight: 400,
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    } as CSSProperties,
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    } as CSSProperties,
  };
};
