import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useBackButtonStyles = () => {
  const { token } = useToken();
  return {
    button: {
      display: "flex",
      alignItems: "center",
      marginBlockEnd: 24,
      borderRadius: 8,
      paddingInline: 16,
      height: 40,
      fontWeight: 600,
      color: token.colorPrimary,
    } as CSSProperties,
  };
};
