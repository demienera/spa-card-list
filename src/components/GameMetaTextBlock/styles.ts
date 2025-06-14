import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useMetaTextBlockStyles = () => {
  const { token } = useToken();
  return {
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12,
    } as CSSProperties,
    label: {
      color: token.colorTextHeading,
      fontSize: 16,
    } as CSSProperties,
    text: {
      color: token.colorTextSecondary,
      fontSize: 16,
    } as CSSProperties,
  };
};
