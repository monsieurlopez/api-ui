import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { type FaqItem } from "../../../config/faqsDictionary";
import { Link } from "react-router-dom";

interface FaqsProps {
  faqs: FaqItem[];
}

export const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-15 flex flex-col lg:flex-row justify-between lg:gap-1 gap-8">
      <div className="lg:w-1/2 lg:pr-10">
        <h2 className="tracking-tight text-2xl font-semibold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Can’t find the answer you’re looking for? Don’t hesitate to get in
          touch with our{" "}
          <Link
            to="/contact"
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
          >
            support team
          </Link>
          .
        </p>
      </div>
      <div className="lg:w-1/2">
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
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
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
