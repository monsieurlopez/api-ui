import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  bg: string;
};

export const HeaderBar = ({ collapsed, toggleCollapsed, bg }: Props) => {
  const { t } = useTranslation();
  const location = useLocation();

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
        background: bg,
        display: "flex",
        alignItems: "center",
      }}
      className="flex justify-between"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{ fontSize: "18px" }}
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
