import { CSSProperties } from "react";

export const useContentLoaderStyles = (fullscreen: boolean) => {
  const loaderStyle: CSSProperties = fullscreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        background: "rgba(17, 24, 39, 0.8)",
        backdropFilter: "blur(4px)",
      }
    : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
        width: "100%",
        padding: "80px 0",
      };

  return {
    loaderStyle,
    emptyWrapper: {
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as CSSProperties,
    childrenWrapper: {
      opacity: 1,
      transition: "opacity 0.3s ease-in-out",
    } as CSSProperties,
  };
};
