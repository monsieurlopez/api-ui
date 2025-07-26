import type React from "react";
import { HeaderContain } from "../components/HeaderContain";
export const Docs: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.docs.title"
        descriptionKey="headers.docs.description"
      />
    </section>
  );
};
