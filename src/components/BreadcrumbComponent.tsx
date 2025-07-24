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
  SwapOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const routeMap: Record<
  string,
  { i18nKey: string; icon?: React.ReactNode; path?: string }
> = {
  "/": { i18nKey: "pages.home", icon: <HomeOutlined /> },
  "/docs": { i18nKey: "pages.docs", icon: <FileTextOutlined /> },
  "/contact": { i18nKey: "pages.contact", icon: <MailOutlined /> },
  "/pricing": { i18nKey: "pages.pricing", icon: <DollarOutlined /> },
  "/settings": { i18nKey: "pages.settings", icon: <SettingOutlined /> },
  "/settings/account": {
    i18nKey: "pages.account",
    icon: <UserOutlined />,
  },
  "/settings/api": { i18nKey: "pages.api", icon: <SwapOutlined /> },
};

type BreadcrumbItem = { title: React.ReactNode };

export const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
  style,
  separator = "/",
}) => {
  const location = useLocation();
  const { t } = useTranslation();

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
            {route.icon} {t(route.i18nKey)}
          </span>
        ),
      };
    })
    .filter((item): item is BreadcrumbItem => item !== null);

  return <Breadcrumb items={items} style={style} separator={separator} />;
};
