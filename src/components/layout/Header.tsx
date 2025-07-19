import { DarkModeToggle } from "../DarkModeToogle";
import { LanguageSelector } from "../LanguageSelector";

export const Header = () => {
  return (
    <header className="container flex justify-between">
      <DarkModeToggle />
      <LanguageSelector />
    </header>
  );
};
