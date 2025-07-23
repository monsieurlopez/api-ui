import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
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
        padding: "0 16px",
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        display: "flex",
        alignItems: "center",
        borderLeft: "1px solid #f0f0f0",
      }}
      className="flex justify-between"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{ fontSize: "20px" }}
      />
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <div className=" w-11">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </Header>
  );
};
