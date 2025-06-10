import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components/App/App";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/config/themeConfig";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
