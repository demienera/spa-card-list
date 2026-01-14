import { CSSProperties } from "react";

export const useAppHeaderStyles = () => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(31, 41, 55, 0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(55, 65, 81, 0.3)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      padding: "0 48px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    } as CSSProperties,
  };
};
