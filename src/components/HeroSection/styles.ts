import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useHeroSectionStyles = () => {
  const { token } = useToken();

  return {
    container: (bgImage: string): CSSProperties => ({
      padding: 24,
      flexGrow: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 15,
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }),
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
  };
};
