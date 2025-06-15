import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useDetailsPageStyles = () => {
  const { token } = useToken();

  return {
    spinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    notFound: {
      textAlign: "center",
      padding: 64,
    } as CSSProperties,
    container: {
      maxWidth: 1100,
      width: "100%",
      marginInline: "auto",
      padding: 32,
      backgroundColor: token.colorBgContainer,
      borderRadius: 12,
      color: "#e0e0e0",
    } as CSSProperties,
    metaBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
      marginBlockEnd: 32,
    } as CSSProperties,
    divider: {
      borderColor: token.colorBorder,
      marginBlock: 32,
    } as CSSProperties,
    text: {
      marginBottom: 16,
      fontSize: "clamp(14px, 1.2vw, 17px)",
      lineHeight: 1.8,
      color: token.colorTextSecondary,
    } as CSSProperties,
  };
};
