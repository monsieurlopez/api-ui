import type React from "react";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col">
      <h1 className="text-4xl font-extrabold mb-12 text-center lg:mt-10 mt-4">
        {t("pages.home")}
      </h1>
    </section>
  );
};
