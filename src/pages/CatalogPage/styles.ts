import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useCatalogPageStyles = () => {
  const { token } = useToken();

  return {
    container: {
      maxWidth: 1400,
      width: "100%",
      marginInline: "auto",
      padding: "0 48px",
    } as CSSProperties,
    catalogTop: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    } as CSSProperties,
    title: {
      margin: 0,
      maxWidth: 700,
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      textAlign: "center",
      color: token.colorTextBase,
      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    } as CSSProperties,
    subtitle: {
      maxWidth: 650,
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      textAlign: "center",
      color: token.colorTextBase,
      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
    } as CSSProperties,
    button: {
      marginTop: token.marginMD,
    } as CSSProperties,
    spinContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 252px)",
      width: "100%",
    } as CSSProperties,
    spin: {
      width: "100%",
      margin: "40px 0",
      color: token.colorPrimary,
    } as CSSProperties,
  };
};
