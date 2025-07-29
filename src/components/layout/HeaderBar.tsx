//* Todo el codigo comentado es para poder usar Vercel y Clerk *//
import { Layout, Grid } from "antd";
//import { Button } from "antd";
import { ButtonCollapseSider } from "../global/ButtonCollapseSider";
import { BreadcrumbComponent } from "../global/BreadcrumbComponent";
/*import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";*/
//import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/useTheme";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export const HeaderBar = ({ collapsed, toggleCollapsed }: Props) => {
  //const { t } = useTranslation();
  const { theme } = useTheme();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.xs && !screens.sm;

  const isMobileBoxShadow =
    isMobile && theme !== "dark"
      ? "shadow-xs"
      : isMobile && theme === "dark"
        ? "shadow-sm shadow-gray-100"
        : "";

  return (
    <Header
      style={{
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        margin: 0,
        padding: 0,
        position: isMobile ? "sticky" : "relative",
        top: isMobile ? 0 : undefined,
        zIndex: isMobile ? 100 : undefined,
      }}
      className={`flex justify-between items-center ${isMobileBoxShadow} lg:border-l border-gray-200 dark:border-gray-700`}
    >
      <ButtonCollapseSider
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        theme={theme}
        iconSize={20}
        style={{ display: isMobile ? "flex" : "none" }}
      />

      <BreadcrumbComponent
        style={{
          display: isMobile ? "block" : "none",
          cursor: "default",
          color: theme === "dark" ? "#fff" : "#001529",
          marginRight: "10px",
        }}
        separator
      />

      {/*<div className="sm:absolute right-0 mr-2 flex items-center gap-2">
        <SignedOut>
          <SignInButton>
            <Button type={theme === "dark" ? "primary" : "default"}>
              {t("header.signin")}
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <Button
              type={theme === "dark" ? "primary" : "default"}
              size="small"
            >
              {t("header.signout")}
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>*/}
    </Header>
  );
};
