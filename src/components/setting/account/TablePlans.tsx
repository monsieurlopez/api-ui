import React from "react";
import {
  RiCheckLine,
  RiInformationLine,
  RiSubtractLine,
} from "@remixicon/react";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowAnimated } from "@/components/ui/ArrowAnimated";
import { cx } from "@/lib/utils";

interface Plan {
  name: string;
  price: string | { monthly: string; annually: string };
  buttonText: string;
  buttonLink: string;
  isStarter: boolean;
}

interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

interface TablePlansProps {
  plans: Plan[];
  sections: Section[];
  billingFrequency: "monthly" | "annually";
}

const isVariablePrice = (
  price: string | { monthly: string; annually: string }
): price is { monthly: string; annually: string } => {
  return typeof price !== "string";
};

export const TablePlans: React.FC<TablePlansProps> = ({
  plans,
  sections,
  billingFrequency,
}) => {
  return (
    <div className="mt-20 hidden sm:mt-28 lg:block">
      <div className="relative">
        <div className="sticky top-0 z-20 h-28 w-full bg-white dark:bg-gray-950" />
        <table className="w-full table-fixed border-separate border-spacing-0 text-left">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            {plans.map((_, index) => (
              <col key={index} className="w-1/5" />
            ))}
          </colgroup>
          <thead className="sticky top-28">
            <tr>
              <th
                scope="col"
                className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="font-semibold leading-7 text-gray-900 dark:text-gray-50">
                  Compare prices
                </div>
                <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  Price per month (billed yearly)
                </div>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  scope="col"
                  className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                >
                  <div
                    className={cx(
                      !plan.isStarter
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-900 dark:text-gray-50",
                      "font-semibold leading-7"
                    )}
                  >
                    {plan.name}
                  </div>
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    {isVariablePrice(plan.price)
                      ? billingFrequency === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually
                      : plan.price}{" "}
                    / per user
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section, sectionIdx) => (
              <React.Fragment key={section.name}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={plans.length + 1}
                    className={cx(
                      sectionIdx === 0 ? "pt-14" : "pt-10",
                      "border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                    )}
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="transition hover:bg-indigo-50/30 dark:hover:bg-indigo-800/5"
                  >
                    <th
                      scope="row"
                      className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                    >
                      <span>{feature.name}</span>
                      {feature.tooltip && (
                        <Tooltip side="right" content={feature.tooltip}>
                          <RiInformationLine
                            className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                            aria-hidden="true"
                          />
                        </Tooltip>
                      )}
                    </th>
                    {plans.map((plan) => (
                      <td
                        key={plan.name}
                        className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                      >
                        {typeof feature.plans[plan.name] === "string" ? (
                          <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                            {feature.plans[plan.name]}
                          </div>
                        ) : (
                          <>
                            {feature.plans[plan.name] === true ? (
                              <RiCheckLine
                                className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                aria-hidden="true"
                              />
                            ) : (
                              <RiSubtractLine
                                className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                              />
                            )}
                            <span className="sr-only">
                              {feature.plans[plan.name] === true
                                ? "Included"
                                : "Not included"}{" "}
                              in {plan.name}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr>
              <th
                scope="row"
                className="pt-6 text-sm font-normal leading-6 text-gray-900 dark:text-gray-50"
              >
                <span className="sr-only">Link to activate plan</span>
              </th>
              {plans.map((plan) => (
                <td key={plan.name} className="px-6 pt-6 lg:px-8">
                  {plan.isStarter ? (
                    <Button
                      variant="light"
                      asChild
                      className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                    >
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                        <ArrowAnimated />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="light"
                      asChild
                      className="group bg-transparent px-0 text-base text-indigo-600 hover:bg-transparent dark:bg-transparent dark:text-indigo-400 hover:dark:bg-transparent"
                    >
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                        <ArrowAnimated />
                      </Link>
                    </Button>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
