import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Pricing, Home, Contact, Docs } from "./pages/pages";

const App = () => {
  return (
    <div className="h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white mx-auto flex flex-col items-center overflow-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default App;
