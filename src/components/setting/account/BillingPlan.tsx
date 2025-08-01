import React from "react";
import { Tabs, Divider } from "antd";
import { Link } from "react-router-dom";

export const BillingPlan: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Billing
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Update your payment information or switch plans according to your needs
      </p>
      <Tabs className="mt-6">
        <div className="mt-8 sm:mx-auto sm:max-w-7xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Plan
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="flex items-center space-x-2">
                <span className="font-medium text-gray-900 dark:text-gray-400">
                  Team
                </span>
                <span className="inline-flex items-center self-center rounded bg-gray-100 px-2 py-0.5 font-medium text-gray-500">
                  Annual
                </span>
              </p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-gray-400">
                $100/month <span className="font-normal">(incl. VAT)</span>
              </p>
              <Link
                to="/pricing"
                className="mt-6 inline-flex rounded border border-gray-200 bg-white px-2.5 py-1.5 font-medium text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900"
              >
                Manage plans
              </Link>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-400 mt-1">
                Billing period
              </p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-gray-400">
                Monthly <span className="font-normal">(renews 20/08/23)</span>
              </p>
              <Link
                to="/pricing"
                className="mt-6 inline-flex rounded border border-gray-200 bg-white px-2.5 py-1.5 font-medium text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900"
              >
                Change billing period
              </Link>
            </div>
          </div>
        </div>
      </Tabs>
      <Divider />
    </div>
  );
};
