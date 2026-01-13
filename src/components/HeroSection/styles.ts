import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useHeroSectionStyles = () => {
  const { token } = useToken();

  return {
    container: (bgImage: string): CSSProperties => ({
      padding: 48,
      flexGrow: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 24,
      background: token.colorBgContainer,
      borderRadius: 0,
      backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(31, 41, 55, 0.75) 50%, rgba(99, 102, 241, 0.3) 100%), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      position: "relative",
      overflow: "hidden",
    }),
    title: {
      margin: 0,
      maxWidth: 1000,
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #6366f1 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: 700,
      textShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      animation: "fadeInUp 0.8s ease-out",
    } as CSSProperties,
    subtitle: {
      maxWidth: 750,
      fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
      textAlign: "center",
      color: token.colorTextBase,
      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
      lineHeight: 1.6,
      fontWeight: 400,
      opacity: 0.95,
      animation: "fadeInUp 0.8s ease-out 0.2s both",
    } as CSSProperties,
    link: {
      marginTop: token.marginMD,
      border: "none",
      borderRadius: 16,
      color: "#ffffff",
      padding: "14px 40px",
      backgroundColor: "transparent",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: 600,
      fontSize: "1.1rem",
      animation: "fadeInUp 0.8s ease-out 0.4s both",
    } as CSSProperties,
  };
};
