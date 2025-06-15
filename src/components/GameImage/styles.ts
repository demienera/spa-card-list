import { CSSProperties } from "react";

export const useGameImageStyles = () => {
  return {
    container: {
      borderRadius: 12,
      overflow: "hidden",
      marginBlockEnd: 32,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
      height: 300,
      MaxHeight: 400,
      position: "relative",
    } as CSSProperties,

    skeleton: {
      width: "100%",
      height: 400,
    } as CSSProperties,
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    } as CSSProperties,
  };
};
