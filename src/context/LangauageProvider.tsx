// src/context/LanguageProvider.tsx
import React, { useState, useEffect } from "react";
import i18n from "../plugins/i18n";
import { LanguageContext } from "./LanguageContext";
import type { LanguageContextType } from "./LanguageContext";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(i18n.language);

  const setLanguageFunc = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const onLanguageChanged = (lng: string) => setLanguage(lng);
    i18n.on("languageChanged", onLanguageChanged);
    return () => i18n.off("languageChanged", onLanguageChanged);
  }, []);

  const contextValue: LanguageContextType = {
    language,
    setLanguage: setLanguageFunc,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
