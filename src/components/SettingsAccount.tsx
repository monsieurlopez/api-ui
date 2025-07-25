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
    "relative border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 p-7 shadow max-w-[400px] w-full";

  const classH3 =
    "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[60%] bg-white dark:bg-gray-800 px-5 text-center text-lg font-medium text-gray-900 dark:text-gray-100 dark:border border-gray-300 dark:border-gray-700 dark:rounded-lg";

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
        <section className="container flex flex-wrap gap-10 md:gap-6 md:justify-start justify-center mx-auto">
          <div className={classDiv}>
            <h3 className={classH3}>{t("settings.theme", "Mode")}</h3>
            <div className="mt-2">
              <DarkModeToggle />
            </div>
          </div>
          <div className={classDiv}>
            {" "}
            <h3 className={classH3}>{t("settings.language", "Language")}</h3>
            <div className="mt-2">
              <LanguageSelector />
            </div>
          </div>
        </section>
      </ConfigProvider>
    </>
  );
};
