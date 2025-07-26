import type React from "react";
import { PricingCards } from "../components/pricing/PricingCards";
import { HeaderContain } from "../components/global/HeaderContain";
export const Pricing: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.pricing.title"
        descriptionKey="headers.pricing.description"
      />
      <PricingCards />
    </section>
  );
};
