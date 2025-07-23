import React from "react";
import { useTranslation } from "react-i18next";

type PricingCard = {
  name: string;
  price: string;
  features: string[];
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const PricingCards: React.FC = () => {
  const { t } = useTranslation();

  const pricingCards = t("pricing.cards", {
    returnObjects: true,
  }) as PricingCard[];

  return (
    <section className="container mt-4 px-4 w-full mx-auto">
      <div className="flex flex-wrap gap-5 justify-center mx-auto items-stretch">
        {pricingCards.map(({ name, price, features }, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md max-w-[400px] w-full text-center flex flex-col"
          >
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                {name}
              </h2>
              <p className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                {price}
              </p>
              <ul className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center space-x-3"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-gray-800 text-white dark:bg-white dark:text-gray-900  hover:bg-gray-900 dark:hover:bg-gray-300 py-3 px-8 rounded-md transition-colors duration-300 mt-auto font-semibold">
              {t("pricing.button", "Choose Plan")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
