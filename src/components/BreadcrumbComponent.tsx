import React from "react";
import { Breadcrumb } from "antd";
import type BreadcrumbProps from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  DollarOutlined,
  FileTextOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

// Mapa de rutas e iconos
const routeMap: Record<
  string,
  { label: string; icon?: React.ReactNode; path?: string }
> = {
  "/": { label: "Home", icon: <HomeOutlined />, path: "/" },
  "/docs": {
    label: "Documentation",
    icon: <FileTextOutlined />,
    path: "/docs",
  },
  "/contact": { label: "Contact", icon: <MailOutlined />, path: "/contact" },
  "/pricing": { label: "Pricing", icon: <DollarOutlined />, path: "/pricing" },
  "/settings": {
    label: "Settings",
    icon: <SettingOutlined />,
    path: "/settings",
  },
  "/settings/account": {
    label: "Account",
    icon: <UserOutlined />,
    path: "/settings/account",
  },
  "/settings/api": {
    label: "API",
    icon: <UserOutlined />,
    path: "/settings/api",
  },
};

export const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
  style,
  separator = "/",
}) => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter(Boolean);

  const breadcrumbPaths = pathSnippets.map((_, index) => {
    return "/" + pathSnippets.slice(0, index + 1).join("/");
  });

  // Siempre empezar con "/"
  const fullPaths = ["/", ...breadcrumbPaths.filter((p) => p !== "/")];

  const items = fullPaths
    .map((path, index) => {
      const route = routeMap[path];
      if (!route) return null;

      const isLast = index === fullPaths.length - 1;

      return {
        title: isLast ? (
          <>
            {route.icon} <span className="ml-0">{route.label}</span>
          </>
        ) : (
          <Link to={route.path || path}>
            {route.icon} <span className="ml-0">{route.label}</span>
          </Link>
        ),
      };
    })
    .filter((item): item is { title: React.ReactNode } => item !== null);

  return (
    <Breadcrumb
      items={items}
      separator=">"
      style={style}
      separator={separator}
    />
  );
};
