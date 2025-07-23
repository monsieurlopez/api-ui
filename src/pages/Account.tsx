import type React from "react";
//import { useTranslation } from "react-i18next";
import { SettingsAccount } from "../components/SettingsAccount";

export const Account: React.FC = () => {
  //const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col mx-auto">
      <SettingsAccount />
    </section>
  );
};
