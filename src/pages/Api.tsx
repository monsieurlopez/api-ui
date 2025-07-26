import type React from "react";
import { HeaderContain } from "../components/global/HeaderContain";
import { Usage } from "../components/setting/api/Usage";

export const Api: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.api.title"
        descriptionKey="headers.api.description"
      />
      <Usage />
    </section>
  );
};
