import { DrawerComponent } from "../DrawerCompoent";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => {
  return (
    <header className="container flex justify-between sticky top-0 z-100 dark:bg-gray-900 py-4">
      <div>
        <h1 className="text-xl font-bold mx-2">Insiders Moves</h1>
      </div>
      <div className="flex items-center gap-4 mx-2 h-full">
        <DrawerComponent />
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
