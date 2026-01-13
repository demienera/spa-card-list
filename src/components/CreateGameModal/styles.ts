import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useCreateGameModalStyles = () => {
  const { token } = useToken();

  return {
    modal: {
      body: {
        padding: "24px",
        maxHeight: "80vh",
        overflowY: "auto" as const,
        background: token.colorBgContainer,
      } as CSSProperties,
      header: {
        background: "rgba(31, 41, 55, 0.95)",
        borderBottom: "1px solid rgba(55, 65, 81, 0.5)",
        padding: "20px 24px",
        borderRadius: "16px 16px 0 0",
      } as CSSProperties,
      content: {
        background: token.colorBgContainer,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
      } as CSSProperties,
      mask: {
        backdropFilter: "blur(4px)",
      } as CSSProperties,
    },
    formWrapper: {
      padding: "8px 0",
    } as CSSProperties,
  };
};
