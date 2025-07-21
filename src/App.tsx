import { Header } from "./components/layout/Header";
import { PricingCards } from "./components/PricingCards";

const App = () => {
  return (
    <div className="h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white mx-auto flex flex-col items-center overflow-auto">
      <Header />
      <div className="container text-center w-full mt-4">
        <PricingCards />
        <PricingCards />
        <PricingCards />
      </div>
    </div>
  );
};

export default App;
