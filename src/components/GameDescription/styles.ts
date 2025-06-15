import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useGameDescriptionStyles = () => {
  const { token } = useToken();

  return {
    text: {
      marginBottom: 16,
      fontSize: "clamp(14px, 1.2vw, 17px)",
      lineHeight: 1.8,
      color: token.colorTextSecondary,
    } as CSSProperties,
  };
};
