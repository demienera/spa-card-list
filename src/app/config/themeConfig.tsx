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
          colorPrimary: "#f72585",
          colorBgBase: "#0e0e10",
          colorTextBase: "#f0f0f0",
          fontFamily: "'Rubik', sans-serif",
          logoFont: "'Orbitron', sans-serif",
        },
        components: {
          Typography: {
            fontFamily: "'Rubik', sans-serif",
          },
          Button: {
            borderRadius: 8,
          },
          Layout: {
            headerBg: "#121212",
            footerBg: "#121212",
          },
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
};
