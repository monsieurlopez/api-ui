import type React from "react";
import { SettingsAccount } from "../components/setting/account/SettingsAccount";
import { HeaderContain } from "../components/global/HeaderContain";

export const Account: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.account.title"
        descriptionKey="headers.account.description"
      />
      <SettingsAccount />
    </section>
  );
};
