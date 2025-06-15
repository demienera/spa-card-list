import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useAppContentStyles = () => {
  const { token } = useToken();

  return {
    content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: token.colorBgBase,
    } as CSSProperties,

    container: {
      marginBlock: 30,
      marginInline: "auto",
      paddingInline: 15,
      maxWidth: 1500,
      width: "100%",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      borderRadius: token.borderRadiusLG,
    } as CSSProperties,
  };
};
