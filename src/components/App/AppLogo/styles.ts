import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useLogoStyles = () => {
  const { token } = useToken();

  return {
    logo: {
      fontFamily: token.fontFamilySecondary,
      fontSize: 28,
      fontWeight: 700,
      background:
        "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #8b5cf6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textDecoration: "none",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      letterSpacing: "1px",
      filter: "drop-shadow(0 1px 3px rgba(139, 92, 246, 0.3))",
    } as CSSProperties,
  };
};
