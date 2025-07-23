import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/useTheme";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export const HeaderBar = ({ collapsed, toggleCollapsed }: Props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme } = useTheme();

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
      }}
      className="flex justify-between items-end"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          fontSize: "20px",
          color: theme === "dark" ? "#fff" : "#001529",
          margin: 0,
          padding: 0,
        }}
      />
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <div className="flex pb-1">
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
