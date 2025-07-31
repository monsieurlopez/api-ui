import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import "./index.css";
import "./App.css";
import "./plugins/i18n.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { LanguageProvider } from "./context/LangauageProvider.tsx";
//import App from "./App.tsx"; //Se podrá eliminar una vez tengamos el dominio
import { ClerkWrapper } from "./components/global/ClerkWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <ClerkWrapper />
          {/*<App />*/}
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
