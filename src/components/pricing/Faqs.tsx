import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: t("faqs.question1"), answer: t("faqs.answer1") },
    { question: t("faqs.question2"), answer: t("faqs.answer2") },
    { question: t("faqs.question3"), answer: t("faqs.answer3") },
    { question: t("faqs.question4"), answer: t("faqs.answer4") },
    { question: t("faqs.question5"), answer: t("faqs.answer5") },
  ];

  return (
    <section className="mt-20 flex flex-col xl:flex-row justify-between lg:gap-4 gap-8 mx-auto">
      <div className="w-full xl:w-1/2 lg:pr-10">
        <h2 className="tracking-tight text-2xl font-semibold text-gray-900 dark:text-white">
          {t("faqs.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {t("faqs.description")}{" "}
          <Link
            to="/contact"
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
          >
            {t("faqs.support_team")}
            {"."}
          </Link>
        </p>
      </div>
      <div className="w-full xl:w-1/2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <button
              className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-900 dark:text-white"
              onClick={() => toggleItem(index)}
            >
              <span className="flex items-center">{faq.question}</span>
              <DownOutlined
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-4">
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
