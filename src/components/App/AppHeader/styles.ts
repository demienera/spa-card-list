import { CSSProperties } from "react";

export const useAppHeaderStyles = () => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    } as CSSProperties,
  };
};
