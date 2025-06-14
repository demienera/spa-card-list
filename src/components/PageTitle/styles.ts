import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const getPageTitleStyles = (isMain: boolean) => {
  const { token } = useToken();
  return {
    base: {
      color: token.colorTextHeading,
      marginBlockEnd: 24,
      ...((isMain && {
        fontWeight: 700,
        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontFamily: `${token.fontFamilySecondary}, ${token.fontFamily}`,
      }) as CSSProperties),
    },
  };
};
