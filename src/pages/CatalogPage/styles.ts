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
      padding: "32px 48px",
      animation: "fadeInUp 0.6s ease-out",
      minHeight: "calc(100vh - 64px - 70px)",
      display: "flex",
      flexDirection: "column" as const,
    } as CSSProperties,
    catalogTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: 32,
      gap: 16,
      flexWrap: "wrap" as const,
      flexShrink: 0,
    } as CSSProperties,
    contentWrapper: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: "400px",
    } as CSSProperties,
    addButton: {
      marginBottom: 16,
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
