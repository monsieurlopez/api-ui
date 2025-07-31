import { useState } from "react";
import { Menu, Layout } from "antd";
import { ButtonCollapseSider } from "../global/ButtonCollapseSider";
//import { SignedIn, UserButton } from "@clerk/clerk-react";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import { navItems } from "../../config/navigationConfig";
import type { NavItem } from "../../config/navigationConfig";
import { useTranslation } from "react-i18next";

import iconPulse from "/icon_pulse.svg";

const { Sider } = Layout;

type Props = {
  collapsed: boolean;
  onCollapse: (val: boolean) => void;
};

export const SidebarMenu = ({ collapsed, onCollapse }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  const findKeyByPath = (path: string): string | undefined => {
    for (const item of navItems) {
      if (item.path === path) return item.key;
      if (item.children) {
        const child = item.children.find((c) => c.path === path);
        if (child) return child.key;
      }
    }
    return "1";
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const target = [
      ...navItems,
      ...navItems.flatMap((i) => i.children || []),
    ].find((item) => item.key === e.key);
    if (target) {
      navigate(target.path);
    }
    if (isMobile) {
      onCollapse(true);
    }
  };

  const buildMenuItems = (items: NavItem[]): MenuProps["items"] => {
    return items.map(({ key, icon, i18nKey, label, children }) => ({
      key,
      icon,
      label: i18nKey ? t(i18nKey) : label || key,
      children: children ? buildMenuItems(children) : undefined,
    }));
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
        <img
          src={iconPulse}
          alt="Icon Insiders Pulse"
          style={{ marginInline: collapsed ? "auto" : 3 }}
          className="h-8 dark:fill-white dark:stroke-white"
        />
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
        selectedKeys={[findKeyByPath(location.pathname)!]}
        onClick={handleMenuClick}
        items={buildMenuItems(navItems)}
        style={{ border: "none" }}
      />

      {/*<div
        className={`absolute ${
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
      </div>*/}
    </Sider>
  );
};
