import type React from "react";
import { useTranslation } from "react-i18next";
import { SettingsAccount } from "../components/SettingsAccount";

export const Account: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col mx-auto">
      <h1 className="text-4xl font-extrabold mb-12 text-center lg:mt-10 mt-4">
        {t("pages.contact")}
      </h1>
      <SettingsAccount />
    </section>
  );
};
