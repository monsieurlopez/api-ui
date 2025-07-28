import React from "react";
import { Collapse } from "antd";
import { type FaqItem } from "../../../config/faqsDictionary";

const { Panel } = Collapse;

interface FaqsProps {
  faqs: FaqItem[];
}

export const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  return (
    <section className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
        Frequently asked questions
      </h2>
      <div className="mt-16">
        <Collapse accordion>
          {faqs.map((faq, index) => (
            <Panel header={faq.question} key={index}>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
};
