import type React from "react";
//import { useTranslation } from "react-i18next";
import { FormContact } from "../components/FormContact";

export const Contact: React.FC = () => {
  //const { t } = useTranslation();

  return (
    <section className="container text-center w-full flex flex-col mx-auto">
      
      <FormContact />
    </section>
  );
};
