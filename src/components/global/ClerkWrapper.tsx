import { ClerkProvider } from "@clerk/clerk-react";
import { useTheme } from "../../context/useTheme";
import App from "../../App";
import { dark } from "@clerk/themes";
import { useLanguage } from "../../hooks/useLanguage";
import { frFR, esES, enUS } from "@clerk/localizations";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const clerkLocaleMap: Record<string, object> = {
  en: enUS,
  es: esES,
  fr: frFR,
};

export const ClerkWrapper = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const clerkLocale = clerkLocaleMap[language] || "enUS";

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={theme === "dark" ? { baseTheme: dark } : {}}
      localization={clerkLocale}
    >
      <App />
    </ClerkProvider>
  );
};
