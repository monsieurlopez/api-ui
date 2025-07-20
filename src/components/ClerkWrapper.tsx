import { ClerkProvider } from "@clerk/clerk-react";
import { useTheme } from "../context/useTheme";
import App from "../App";
import { dark } from "@clerk/themes";
import { useLanguage } from "../hooks/useLanguage";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

export const ClerkWrapper = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={theme === "dark" ? { baseTheme: dark } : {}}
      localization={{ locale: language }}
    >
      <App />
    </ClerkProvider>
  );
};
