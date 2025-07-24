import { useState } from "react";
import { Menu, Layout, Grid } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MailOutlined,
  DollarOutlined,
  ToolOutlined,
  SettingOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { ButtonCollapseSider } from "../ButtonCollapseSider";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const keyMap: Record<string, string> = {
  "/": "1",
  "/docs": "2",
  "/contact": "3",
  "/pricing": "4",
  "/settings/api": "6",
  "/settings/account": "7",
};

type Props = {
  collapsed: boolean;
  onCollapse: (val: boolean) => void;
};

export const SidebarMenu = ({ collapsed, onCollapse }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const screens = useBreakpoint();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/docs");
        break;
      case "3":
        navigate("/contact");
        break;
      case "4":
        navigate("/pricing");
        break;
      case "6":
        navigate("/settings/api");
        break;
      case "7":
        navigate("/settings/account");
        break;
    }
  };

  return (
    <Sider
      breakpoint="sm"
      collapsedWidth={isMobile ? 0 : 80}
      collapsed={collapsed}
      collapsible={true}
      onCollapse={onCollapse}
      onBreakpoint={(broken) => setIsMobile(broken)}
      width={isMobile ? "100vw" : 200}
      style={{
        height: "100vh",
        position: isMobile ? "fixed" : "sticky",
        top: 0,
        left: 0,
        zIndex: isMobile ? 99 : "auto",
        overflow: "hidden",
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
      }}
    >
      <div className="demo-logo-vertical p-4 flex justify-between items-center">
        <img src="/vite.svg" alt="Logo Vite" className="h-8 w-auto m-sm-auto" />
        <ButtonCollapseSider
          collapsed={collapsed}
          toggleCollapsed={() => onCollapse(!collapsed)}
          theme={theme}
          iconSize={20}
          className="sm:block hidden"
          style={{ display: isMobile ? "block" : "none" }}
        />
      </div>

      <Menu
        theme={theme === "dark" ? "dark" : "light"}
        mode="inline"
        selectedKeys={[keyMap[location.pathname] || "1"]}
        onClick={handleMenuClick}
        items={[
          { key: "1", icon: <HomeOutlined />, label: "Home" },
          { key: "2", icon: <FileTextOutlined />, label: "Documentation" },
          { key: "3", icon: <MailOutlined />, label: "Contact" },
          { key: "4", icon: <DollarOutlined />, label: "Pricing" },
          {
            key: "5",
            icon: <ToolOutlined />,
            label: "Settings",
            children: [
              { key: "6", icon: <SwapOutlined />, label: "API" },
              { key: "7", icon: <SettingOutlined />, label: "Account" },
            ],
          },
        ]}
      />
      <div
        className={`absolute
    ${
      isMobile
        ? "bottom-5 left-5"
        : collapsed
          ? "bottom-13 left-7"
          : "bottom-15 left-10"
    }`}
      >
        <SignedIn>
          <UserButton showName={!collapsed} />
        </SignedIn>
      </div>
    </Sider>
  );
};
