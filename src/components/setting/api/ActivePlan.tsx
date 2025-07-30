import { Tabs } from "antd";
export const ActivePlan = () => {
  return (
    <div className="w-full overflow-x-auto mt-15">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Active Plan
      </h2>
      <p className="mt-1 text-gray-500">
        This is the plan you are currently using
      </p>
      <Tabs className="mt-6">
        <div className="border rounded-lg border-gray-200 dark:bg-gray-600 px-5 py-5 dark:text-white text-xl font-semibold">
          Free
        </div>
      </Tabs>
    </div>
  );
};
