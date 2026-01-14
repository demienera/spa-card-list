import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useCardItemStyles = () => {
  const { token } = useToken();

  return {
    card: {
      minWidth: 200,
      width: "100%",
      height: "100%",
      position: "relative",
      border: "none",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      overflow: "hidden",
    } as CSSProperties,
    likeIcon: (liked: boolean): CSSProperties =>
      ({
        position: "absolute",
        top: 16,
        right: 16,
        fontSize: 24,
        color: liked ? "#34d399" : "rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        zIndex: 10,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        filter: liked ? "drop-shadow(0 0 8px rgba(52, 211, 153, 0.4))" : "none",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }) as CSSProperties,
    deleteIcon: {
      position: "absolute",
      top: 16,
      left: 16,
      fontSize: 20,
      color: "rgba(255, 255, 255, 0.6)",
      cursor: "pointer",
      zIndex: 10,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: "50%",
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
    } as CSSProperties,
    cardTitle: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "block",
      maxWidth: "100%",
      fontSize: 20,
      fontWeight: 600,
      color: token.colorTextHeading,
      marginBottom: 8,
    } as CSSProperties,
    link: {
      textDecoration: "none",
    } as CSSProperties,
    coverWrapper: {
      overflow: "hidden",
      position: "relative",
    } as CSSProperties,
    cardImg: {
      height: 200,
      objectFit: "cover",
      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      width: "100%",
    } as CSSProperties,
  };
};
