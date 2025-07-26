import type React from "react";
import { PricingCards } from "../components/PricingCards";
import { Tag } from "antd";
import { useTranslation } from "react-i18next";

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <div className="text-left max-w-xl mb-10">
        <Tag bordered={true} color="blue" className="max-w-max font-semibold">
          <span className="uppercase">{t("pages.pricing")}</span>
        </Tag>
        <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-gray-100">
          Our plans scale with you
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-wrap">
          Plans that empower you and your team to ship without friction. Our
          flexible pricing models ensure that efficiency doesn’t come at the
          cost of your budget.
        </p>
      </div>

      <PricingCards />
    </section>
  );
};
