import type React from "react";
import { useTranslation } from "react-i18next";
import { SettingsAccount } from "../components/SettingsAccount";
import { Tag } from "antd";

export const Account: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <div className="text-left max-w-xl mb-10">
        <Tag bordered={true} color="blue" className="max-w-max font-semibold">
          <span className="uppercase">{t("pages.account")}</span>
        </Tag>
        <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-gray-100">
          Manage your personal account with ease
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-wrap">
          Control your account settings and manage your preferences — all from
          one place. We make it simple to stay organized and secure.
        </p>
      </div>
      <SettingsAccount />
    </section>
  );
};
