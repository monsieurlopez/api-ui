import React from "react";
import { Breadcrumb } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  DollarOutlined,
  FileTextOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

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

export const BreadcrumbComponent: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const route = routeMap[url];

    if (!route) return null;

    return {
      title: route.path ? (
        <Link to={route.path}>
          {route.icon} <span className="ml-1">{route.label}</span>
        </Link>
      ) : (
        <>
          {route.icon} <span className="ml-1">{route.label}</span>
        </>
      ),
    };
  });

  const home = routeMap["/"];
  const items = [
    {
      title: (
        <Link to="/">
          {home.icon} <span className="ml-1">{home.label}</span>
        </Link>
      ),
    },
    ...breadcrumbItems.slice(1),
  ];

  const filteredItems = items.filter(
    (item): item is NonNullable<typeof item> => item !== null
  );

  return <Breadcrumb items={filteredItems} />;
};
