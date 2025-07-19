import { useEffect, useState } from "react";
import { SunFilled, MoonFilled } from "@ant-design/icons";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on first load
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="p-1 rounded mx-1"
    >
      {darkMode ? (
        <SunFilled className="w-6 h-6 text-yellow-500 " />
      ) : (
        <MoonFilled
          className="w-6 h-6 text-gray-900 "
          onClick={toggleDarkMode}
        />
      )}
    </button>
  );
};
