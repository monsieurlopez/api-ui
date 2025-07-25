import React from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../context/useTheme";
import { useTranslation } from "react-i18next";

export const SettingsAccount: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const classDiv =
    "flex flex-col border border-gray-300 dark:border-gray-700 relative justify-between rounded-lg bg-white dark:bg-gray-800 p-6 shadow max-w-[400px] w-full";

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
        <section className="container flex flex-wrap gap-5">
          <div className={classDiv}>
            <h3 className="text-left font-medium text-lg text-gray-900 dark:text-gray-100">
              {t("settings.theme", "Mode")}
            </h3>
            <div className="text-left">
              <DarkModeToggle />
            </div>
          </div>
          <div className={classDiv}>
            {" "}
            <h3 className="text-left font-medium text-lg text-gray-900 dark:text-gray-100">
              {t("settings.language", "Language")}
            </h3>
            <div className="text-left">
              <LanguageSelector />
            </div>
          </div>
        </section>
      </ConfigProvider>
    </>
  );
};
