import type React from "react";
import { useTranslation } from "react-i18next";
import { FormContact } from "../components/FormContact";
import { Tag } from "antd";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <div className="text-left max-w-xl mb-10">
        <Tag bordered={true} color="blue" className="max-w-max font-semibold">
          <span className="uppercase">{t("pages.contact")}</span>
        </Tag>
        <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-gray-100">
          Let’s talk!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-wrap">
          Whether you have a question, need support, or want to explore how we
          can help your team, we’re here for you.
        </p>
      </div>
      <FormContact />
    </section>
  );
};
