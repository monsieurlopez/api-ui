import type React from "react";
import { PricingTremor } from "../components/PricingTremor";

//import { useTranslation } from "react-i18next";

export const Pricing: React.FC = () => {
  return (
    <section className="container text-center w-full flex flex-col">
      <PricingTremor />
    </section>
  );
};
