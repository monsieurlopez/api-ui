import type React from "react";
import { HeaderContain } from "../components/HeaderContain";
export const Docs: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.documentation.title"
        descriptionKey="headers.documentation.description"
      />
    </section>
  );
};
