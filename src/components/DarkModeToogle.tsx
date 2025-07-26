import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";

const themeOptions = [
  {
    code: "light",
    label: "Light",
    icon: <SunFilled className="w-6 h-6 text-yellow-500" />,
  },
  {
    code: "dark",
    label: "Dark",
    icon: <MoonFilled className="w-6 h-6 text-gray-900" />,
  },
];

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Cambia de tema al seleccionar el radio
  const handleChange = (value: string) => {
    if (value !== theme) toggleTheme();
  };

  return (
    <fieldset className="md:flex md:justify-center grid grid-cols-1 gap-4 max-w-md mx-auto">
      <legend className="sr-only">Toggle theme</legend>
      {themeOptions.map(({ code, label, icon }) => {
        const isSelected = theme === code;
        return (
          <label
            key={code}
            htmlFor={`theme-${code}`}
            className={`
              flex items-center gap-5 rounded-md border p-3 cursor-pointer justify-center transition
              ${
                isSelected
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              }
            `}
          >
            <input
              type="radio"
              id={`theme-${code}`}
              name="theme"
              value={code}
              checked={isSelected}
              onChange={() => handleChange(code)}
              className="h-3 w-3 accent-indigo-600 dark:accent-indigo-400"
            />
            <span className="flex items-center gap-0">
              {icon}
              <span className="text-sm font-medium m-0 p-0">{label}</span>
            </span>
          </label>
        );
      })}
    </fieldset>
  );
};
