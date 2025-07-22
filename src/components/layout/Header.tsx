/*import { useEffect, useState } from "react";
import { DrawerComponent } from "../DrawerComponent";
import { Navigation } from "./Navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MenuOutlined } from "@ant-design/icons";
import { MobileDrawer } from "../MobileDrawer";

export const Header: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="container flex justify-between sticky top-0 z-100 dark:bg-gray-900 py-4 items-center">
      <div>
        <h1 className="text-xl font-bold mx-2">Insiders Moves</h1>
      </div>
    </header>
  );
};*/
