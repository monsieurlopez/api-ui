import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "./plugins/i18n.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { ClerkWrapper } from "./components/ClerkWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ClerkWrapper />
    </ThemeProvider>
  </StrictMode>
);
