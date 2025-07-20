import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="p-1 rounded mx-1"
    >
      {theme === "dark" ? (
        <SunFilled className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonFilled className="w-6 h-6 text-gray-900" />
      )}
    </button>
  );
};
