import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useAppFooterStyles = () => {
  const { token } = useToken();

  return {
    footer: {
      padding: "24px 50px",
      textAlign: "center",
      background: "rgba(31, 41, 55, 0.8)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(55, 65, 81, 0.3)",
      boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
      color: token.colorTextSecondary,
    } as CSSProperties,
    link: {
      color: token.colorPrimary,
      textDecoration: "underline",
      textDecorationColor: "rgba(139, 92, 246, 0.5)",
      textUnderlineOffset: 2,
      transition: "all 0.2s ease",
    } as CSSProperties,
  };
};
