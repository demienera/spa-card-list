import { ConfigProvider, theme, App as AntdApp } from "antd";
import React, { FC } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#8b5cf6",
          colorSuccess: "#10b981",
          colorWarning: "#f59e0b",
          colorError: "#ef4444",
          colorInfo: "#6366f1",
          colorTextBase: "#e5e7eb",
          colorTextSecondary: "#9ca3af",
          colorTextHeading: "#ffffff",
          colorBorder: "#374151",
          colorBgContainer: "#1f2937",
          colorBgBase: "#111827",
          colorBgElevated: "#1f2937",
          borderRadius: 12,
          borderRadiusLG: 16,
          borderRadiusSM: 8,
          fontFamilyBase: "'Rubik', sans-serif",
          fontFamilySecondary: "'Orbitron', sans-serif",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
          boxShadowSecondary:
            "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
        },
        components: {
          Typography: {
            fontFamily: "'Rubik', sans-serif",
          },
          Button: {
            borderRadius: 12,
            fontWeight: 500,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
          },
          Layout: {
            headerBg: "rgba(31, 41, 55, 0.8)",
            footerBg: "rgba(31, 41, 55, 0.8)",
          },
          Card: {
            borderRadius: 16,
            paddingLG: 24,
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)",
          },
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
};
