import React from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../context/useTheme";
import { useTranslation } from "react-i18next";
import "../assets/styles/Drawer.css";

export const SettingsAccount: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm:
            theme === "dark"
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}
      >
        <table className="w-full table-auto">
          <tbody>
            <tr className="h-14">
              <td className="text-left font-medium text-lg text-gray-900 dark:text-gray-100">
                {t("settings.theme", "Mode")}
              </td>
              <td className="text-right">
                <DarkModeToggle />
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-left font-medium text-lg text-gray-900 dark:text-gray-100">
                {t("settings.language", "Language")}
              </td>
              <td className="text-right">
                <LanguageSelector />
              </td>
            </tr>
          </tbody>
        </table>
      </ConfigProvider>
    </>
  );
};
