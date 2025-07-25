import type React from "react";
import { useTranslation } from "react-i18next";

export const Api: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-left lg:mt-10 mt-3 text-gray-900 dark:text-gray-100">
        {t("pages.api")}
      </h2>
    </section>
  );
};
