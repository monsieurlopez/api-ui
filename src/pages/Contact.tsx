import type React from "react";
import { FormContact } from "../components/FormContact";
import { HeaderContain } from "../components/HeaderContain";

export const Contact: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.contact.title"
        descriptionKey="headers.contact.description"
      />
      <FormContact />
    </section>
  );
};
