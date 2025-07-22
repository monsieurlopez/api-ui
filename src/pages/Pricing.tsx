import type React from "react";
import { PricingCards } from "../components/PricingCards";
import { useTranslation } from "react-i18next";

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col">
      <h1 className="text-4xl font-extrabold mb-12 text-center mt-6">
        {t("pricing.title")}
      </h1>
      <PricingCards />
    </section>
  );
};
