import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Creamos el contexto pero no lo usamos aquí
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
