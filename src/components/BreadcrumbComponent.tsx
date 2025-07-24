import React from "react";
import { Breadcrumb } from "antd";
import type { BreadcrumbProps } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  DollarOutlined,
  FileTextOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const routeMap: Record<
  string,
  { label: string; icon?: React.ReactNode; path?: string }
> = {
  "/": { label: "Home", icon: <HomeOutlined /> },
  "/docs": { label: "Documentation", icon: <FileTextOutlined /> },
  "/contact": { label: "Contact", icon: <MailOutlined /> },
  "/pricing": { label: "Pricing", icon: <DollarOutlined /> },
  "/settings": { label: "Settings", icon: <SettingOutlined /> },
  "/settings/account": { label: "Account", icon: <UserOutlined /> },
  "/settings/api": { label: "API", icon: <UserOutlined /> },
};

type BreadcrumbItem = { title: React.ReactNode };

export const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
  style,
  separator = "/",
}) => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter(Boolean);

  const breadcrumbPaths =
    pathSnippets.length === 0
      ? ["/"]
      : pathSnippets.map((_, index) => {
          return "/" + pathSnippets.slice(0, index + 1).join("/");
        });

  const items = breadcrumbPaths
    .map((path): BreadcrumbItem | null => {
      const route = routeMap[path];
      if (!route) return null;

      return {
        title: (
          <span className="flex items-center gap-1">
            {route.icon} {route.label}
          </span>
        ),
      };
    })
    .filter((item): item is BreadcrumbItem => item !== null);

  return <Breadcrumb items={items} style={style} separator={separator} />;
};
