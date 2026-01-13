import { CSSProperties } from "react";

export const useGameMetaInfoStyles = () => {
  return {
    container: {
      display: "flex",
      gap: 20,
      flexDirection: "column" as const,
    } as CSSProperties,
  };
};
