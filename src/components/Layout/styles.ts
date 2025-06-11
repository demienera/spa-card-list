import { CSSProperties } from "react";

export const useAppLayoutStyles = () => {
  return {
    layout: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      minHeight: "100vh",
    } as CSSProperties,
  };
};
