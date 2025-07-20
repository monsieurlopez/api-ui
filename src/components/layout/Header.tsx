import { DarkModeToggle } from "../DarkModeToogle";
import { LanguageSelector } from "../LanguageSelector";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => {
  return (
    <header className="container flex justify-between">
      <DarkModeToggle />
      <div className="flex items-center gap-4 mx-2">
        <LanguageSelector />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
