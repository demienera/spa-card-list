import { CSSProperties } from "react";

export const useGameFormStyles = () => {
  return {
    textArea: {
      resize: "none" as const,
    } as CSSProperties,
    datePicker: {
      width: "100%",
    } as CSSProperties,
    inputNumber: {
      width: "100%",
    } as CSSProperties,
    counterText: {
      fontSize: 12,
      display: "block",
      textAlign: "right" as const,
    } as CSSProperties,
  };
};
