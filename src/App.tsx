import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { PricingCards } from "./components/PricingCards";

const App = () => {
  return (
    <div className="h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white mx-auto flex flex-col items-center overflow-auto">
      <Header />
      <Routes>
        <Route path="/pricing" element={<PricingCards />} />
      </Routes>
    </div>
  );
};

export default App;
