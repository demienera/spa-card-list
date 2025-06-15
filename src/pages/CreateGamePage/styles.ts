import { CSSProperties } from "react";

export const useCreateGamePageStyles = () => {
  return {
    container: {
      maxWidth: 600,
      marginInline: "auto",
      padding: 24,
      width: "100%",
    } as CSSProperties,
    title: {
      textAlign: "center",
    } as CSSProperties,
    formWrapper: {
      maxWidth: 400,
      marginInline: "auto",
    } as CSSProperties,
  };
};
