import React from "react";
import { Divider } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { BillingPlan } from "./BillingPlan";
import { BillingCard } from "./BillingCard";

export const SettingsAccount: React.FC = () => {
  return (
    <>
      <section className="container flex flex-wrap gap-10 md:gap-6 md:justify-start justify-center mx-auto">
        <div className="mt-2">
          <DarkModeToggle />
        </div>

        <Divider />
        <div className="mt-2">
          <LanguageSelector />
        </div>
        <Divider />
        <BillingPlan />
        <BillingCard />
      </section>
    </>
  );
};
