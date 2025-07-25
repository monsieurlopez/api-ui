import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

type Frequency = {
  value: "monthly" | "annually";
  label: string;
  priceSuffix: string;
};

const frequencies: Frequency[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/mo" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

type PlanPrice = {
  monthly: string;
  annually: string;
};

type Plan = {
  name: string;
  price: string | PlanPrice;
  description: string;
  features: string[];
  isEnterprise: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    description: "For small teams",
    features: ["Unlimited members", "5 workspaces", "Community Slack Support"],
    isEnterprise: false,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Starter",
    price: { monthly: "$50", annually: "$490" },
    description: "For growing teams",
    features: ["Unlimited members", "10 workspaces", "Community Slack Support"],
    isEnterprise: false,
    isRecommended: true,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For custom needs",
    features: [
      "Unlimited members",
      "Unlimited workspaces",
      "Priority Support",
      "Single Sign-On (SSO)",
      "90 days of history",
    ],
    isEnterprise: true,
    isRecommended: false,
    buttonText: "Contact sales",
    buttonLink: "#",
  },
];

export const PricingTremor = () => {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);

  const handleFrequencyChange = (selectedFrequency: Frequency) => {
    setFrequency(selectedFrequency);
  };

  return (
    <section className="container mt-4 px-4 w-full mx-auto">
      <div className="flex flex-wrap gap-5 justify-center mx-auto items-stretch">
        {plans.map((plan, planIdx) => {
          // Aquí nos aseguramos que priceToShow sea string
          const priceToShow: string =
            plan.isRecommended && typeof plan.price !== "string"
              ? plan.price[frequency.value]
              : (plan.price as string);

          return (
            <div
              key={planIdx}
              className={classNames(
                plan.isRecommended
                  ? "border-2 border-indigo-600"
                  : "border border-gray-300",
                "relative flex flex-col justify-between rounded-lg bg-white p-6 shadow dark:bg-gray-800 max-w-[400px] w-full"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                {plan.isRecommended && (
                  <span className="inline-flex items-center rounded-md border border-gray-300 bg-indigo-50 px-2 py-1 text-xs text-gray-800 font-medium">
                    Recommended
                  </span>
                )}
              </div>
              <p className="mt-1 text-gray-600 text-left text-md">
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1 text-gray-900 font-semibold text-2xl">
                {priceToShow}
                {plan.isRecommended && (
                  <span className="text-base font-normal text-gray-500">
                    {frequency.priceSuffix}
                  </span>
                )}
              </p>

              <div className="relative flex h-20 items-center justify-center mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                {plan.isRecommended && (
                  <div className="relative z-10 grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-sm font-semibold ring-1 ring-inset ring-gray-300 shadow">
                    {frequencies.map((option) => (
                      <label
                        key={option.value}
                        className={classNames(
                          option.value === frequency.value
                            ? "bg-indigo-600 text-white"
                            : "text-gray-700",
                          "cursor-pointer rounded-full px-3 py-1"
                        )}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          checked={option.value === frequency.value}
                          onChange={() => handleFrequencyChange(option)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow justify-between mt-6">
                <div className="flex flex-col flex-grow">
                  <p className="font-medium text-gray-700 text-left">
                    Included:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700 flex flex-col">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <RiCheckLine
                          className="h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex-grow" />
                </div>
                <button
                  onClick={() => (window.location.href = plan.buttonLink)}
                  type="button"
                  className={classNames(
                    plan.isRecommended
                      ? "mt-6 inline-flex items-center justify-center rounded-md border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                      : "mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50",
                    "whitespace-nowrap font-medium transition-colors"
                  )}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
