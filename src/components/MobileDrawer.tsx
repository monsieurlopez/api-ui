import { Drawer, ConfigProvider, theme as antdTheme } from "antd";
import { useTheme } from "../context/useTheme";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<Props> = ({ open, onClose }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const links = [
    { path: "/", label: t("nav.home", "Home") },
    { path: "/docs", label: t("nav.docs", "Docs") },
    { path: "/contact", label: t("nav.contact", "Contact") },
    { path: "/pricing", label: t("nav.pricing", "Pricing") },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        width={250}
      >
        <div className="flex justify-between items-center w-full mb-6">
          <span className="text-xl font-bold">{t("menu.title", "Menu")}</span>
          <CloseOutlined onClick={onClose} className="cursor-pointer text-lg" />
        </div>

        <nav className="flex flex-col gap-4 mb-8">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `relative text-base font-bold pl-3 transition-colors duration-300
              text-gray-800 dark:text-gray-100
              ${isActive ? "text-indigo-600 dark:text-indigo-400 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1 before:bg-indigo-600 dark:before:bg-indigo-400 rounded" : ""}
              `
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <table className="w-full table-auto">
          <tbody>
            <tr className="h-14">
              <td className="text-left font-medium text-base">
                {t("settings.theme", "Theme")}
              </td>
              <td className="text-right">
                <DarkModeToggle />
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-left font-medium text-base">
                {t("settings.language", "Language")}
              </td>
              <td className="text-right">
                <LanguageSelector />
              </td>
            </tr>
          </tbody>
        </table>
      </Drawer>
    </ConfigProvider>
  );
};
