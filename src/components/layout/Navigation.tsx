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
            `relative text-md font-sans font-bold transition-colors duration-300 ease-in-out px-2 py-1
            ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            }
            after:absolute after:left-0 after:bottom-0 after:h-[2px]
            after:bg-blue-600 dark:after:bg-blue-400
            after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0"}
            `
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
