import type React from "react";
import { SettingsAccount } from "../components/SettingsAccount";
import { HeaderContain } from "../components/HeaderContain";

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
