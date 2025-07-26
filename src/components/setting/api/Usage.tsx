import React from "react";
import { Progress, Tabs } from "antd";

export const Usage: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900">Usage</h2>
      <p className="mt-1 text-gray-500">
        Update your payment information or switch plans according to your needs
      </p>
      <Tabs className="mt-6">
        <div className="mt-8 sm:mx-auto sm:max-w-7xl">
          <h3 className="font-semibold text-gray-900">Calls</h3>
          <p className="mt-6 font-medium text-gray-900">Remaining calls</p>
          <Progress percent={60} className="mt-2" />
          <div className="mt-3 flex items-center justify-between">
            <p className="flex items-center space-x-2">
              <span className="rounded bg-gray-100 px-2 py-1 font-medium text-gray-900">
                600
              </span>
              <span className="text-gray-500"> / 1000 API calls</span>
            </p>
            <a
              href="/pricing"
              className="rounded border border-gray-200 bg-white px-2.5 py-1.5 font-medium text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900"
            >
              Upgrade Plan
            </a>
          </div>
        </div>
      </Tabs>
    </>
  );
};
