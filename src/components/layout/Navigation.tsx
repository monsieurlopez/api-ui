import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavItem = {
  path: string;
  label: string;
};

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  const links: NavItem[] = [
    { path: "/", label: t("nav.home", "Home") },
    { path: "/docs", label: t("nav.docs", "Docs") },
    { path: "/contact", label: t("nav.contact", "Contact") },
    { path: "/pricing", label: t("nav.pricing", "Pricing") },
  ];

  return (
    <nav className="flex items-center gap-6 mx-2">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }: { isActive: boolean }) =>
            `text-md font-medium transition-colors ${
              isActive
                ? "text-indigo-600 dark:text-indigo-400 underline"
                : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
