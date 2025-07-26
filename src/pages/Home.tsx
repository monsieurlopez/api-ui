import type React from "react";
import { HeaderContain } from "../components/HeaderContain";

export const Home: React.FC = () => {
  return (
    <section className="container md:w-5xl flex flex-col mx-auto">
      <HeaderContain
        titleKey="headers.home.title"
        descriptionKey="headers.home.description"
      />
    </section>
  );
};
