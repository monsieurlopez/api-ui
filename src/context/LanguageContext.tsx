import { createContext } from "react";

export type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
