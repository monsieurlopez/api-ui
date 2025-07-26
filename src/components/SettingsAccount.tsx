import React from "react";
import { ConfigProvider, theme as antdTheme, Divider } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../context/useTheme";
import { BillingPlan } from "./BillingPlan";
import { BillingCard } from "./BillingCard";

export const SettingsAccount: React.FC = () => {
  const { theme } = useTheme();

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
      </ConfigProvider>
    </>
  );
};
