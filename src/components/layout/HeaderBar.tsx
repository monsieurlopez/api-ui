import { Layout, Button, Grid } from "antd";
import { ButtonCollapseSider } from "../ButtonCollapseSider";
import { BreadcrumbComponent } from "../BreadcrumbComponent";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/useTheme";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export const HeaderBar = ({ collapsed, toggleCollapsed }: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.xs && !screens.sm;

  const routeTitleMap: Record<string, string> = {
    "/": "pages.home",
    "/docs": "pages.docs",
    "/contact": "pages.contact",
    "/pricing": "pages.pricing",
    "/settings/account": "pages.settings",
    "/settings/api": "pages.settings",
  };

  const titleKey = routeTitleMap[location.pathname];
  const title = titleKey ? t(titleKey) : "";
  return (
    <Header
      style={{
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        borderLeft: "1px solid #f0f0f0",
        margin: 0,
        padding: 0,
      }}
      className="flex justify-between items-center"
    >
      <ButtonCollapseSider
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        theme={theme}
        iconSize={20}
        style={{ display: isMobile ? "flex" : "none" }}
      />
      <BreadcrumbComponent style={{ display: isMobile ? "block" : "none" }} separator=">"/>
      {/*<h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
        {title}
      </h1>*/}
      <div className="sm:absolute right-0 mr-2">
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
      </div>
    </Header>
  );
};
