import type React from "react";
import { HeaderContain } from "../components/HeaderContain";

export const Api: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.api.title"
        descriptionKey="headers.api.description"
      />
    </section>
  );
};
