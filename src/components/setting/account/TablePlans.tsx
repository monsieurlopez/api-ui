import React, { Fragment } from "react";
import { Button, /*Tooltip,*/ Grid } from "antd";
import {
  CheckCircleOutlined,
  MinusCircleOutlined,
  //InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { Plan, Section } from "../../../config/plansDictionary";

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

const { useBreakpoint } = Grid;

export const TablePlans: React.FC<TablePlansProps> = ({
  plans,
  sections,
  billingFrequency,
}) => {
  const screens = useBreakpoint();

  const sizeText: string = screens.xs ? "text-xs" : "text-sm";
  const smallScreen: boolean | undefined =
    screens.xs || (screens.sm && !screens.md);

  return (
    <section className="mx-auto">
      <div className="mt-5 md:mt-10">
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
                  <div
                    className={`${sizeText} font-normal text-gray-600 dark:text-gray-400`}
                  >
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
                      className={
                        !plan.isStarter
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-900 dark:text-gray-50"
                      }
                    >
                      <div className="font-semibold leading-7">{plan.name}</div>
                      <div
                        className={`${sizeText} font-normal text-gray-600 dark:text-gray-400`}
                      >
                        {isVariablePrice(plan.price)
                          ? billingFrequency === "monthly"
                            ? plan.price.monthly
                            : plan.price.annually
                          : plan.price}{" "}
                        / per user
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIdx) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={plans.length + 1}
                      className={`${sectionIdx === 0 ? "pt-14" : "pt-10"} border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50`}
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
                        className={`${sizeText}flex items-center gap-2 border-b border-gray-100 py-4 font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50`}
                      >
                        <span>{feature.name}</span>
                        {/*{feature.tooltip && (
                          <Tooltip title={feature.tooltip}>
                            <InfoCircleOutlined className="text-gray-700 dark:text-gray-400" />
                          </Tooltip>
                        )}*/}
                      </th>
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                        >
                          {typeof feature.plans[plan.name] === "string" ? (
                            <div
                              className={`${sizeText} leading-6 text-gray-600 dark:text-gray-400`}
                            >
                              {feature.plans[plan.name]}
                            </div>
                          ) : (
                            <>
                              {feature.plans[plan.name] === true ? (
                                <CheckCircleOutlined className="text-indigo-600 dark:text-indigo-400" />
                              ) : (
                                <MinusCircleOutlined className="text-gray-400 dark:text-gray-600" />
                              )}
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr>
                <th
                  scope="row"
                  className={`${sizeText}pt-6 font-normal leading-6 text-gray-900 dark:text-gray-50`}
                >
                  <span className="sr-only">Link to activate plan</span>
                </th>
                {plans.map((plan) => (
                  <td key={plan.name} className="px-6 pt-6 lg:px-8">
                    <Link to={plan.buttonLink}>
                      <Button
                        type={plan.isStarter ? "default" : "primary"}
                        className={sizeText}
                        size={smallScreen ? "small" : "middle"}
                      >
                        {plan.buttonText}
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
