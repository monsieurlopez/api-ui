import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import "./index.css";
import "./App.css";
import "./plugins/i18n.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { LanguageProvider } from "./context/LangauageProvider.tsx";
import { ClerkWrapper } from "./components/ClerkWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <ClerkWrapper />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
