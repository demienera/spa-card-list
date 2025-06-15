import { CSSProperties, ReactNode } from "react";

export const useImagePlaceholderStyles = () => {
  return {
    text: (icon?: ReactNode, textStyle?: CSSProperties) =>
      ({
        color: "#888",
        fontSize: "1rem",
        marginTop: icon ? 8 : 0,
        ...textStyle,
      }) as CSSProperties,

    container: (style?: CSSProperties) =>
      ({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        ...style,
      }) as CSSProperties,
  };
};
