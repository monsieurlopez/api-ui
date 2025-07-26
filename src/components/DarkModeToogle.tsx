import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";
import { Card } from "antd";

const themeOptions = [
  {
    code: "light",
    label: "Light",
    icon: <SunFilled className="text-yellow-500" />,
    description:
      "Switch to light mode for better visibility in bright environments.",
  },
  {
    code: "dark",
    label: "Dark",
    icon: <MoonFilled className="text-gray-900" />,
    description: "Switch to dark mode for reduced eye strain in low light.",
  },
];

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = (value: string) => {
    if (value !== theme) toggleTheme();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Theme
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Choose between light and dark themes to suit your preference.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-start items-stretch gap-4">
        {themeOptions.map(({ code, label, icon, description }) => {
          const isSelected = theme === code;
          return (
            <Card
              key={code}
              onClick={() => handleChange(code)}
              style={{
                borderColor: isSelected ? "indigo" : "",
              }}
              className={`cursor-pointer transition-all ${isSelected ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900" : "border-gray-200 hover:border-indigo-500"}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{icon}</div>
                <div>
                  <h3
                    className={`text-lg font-medium ${isSelected ? "text-indigo-800 dark:text-indigo-200" : "text-gray-900 dark:text-white"}`}
                  >
                    {label}
                  </h3>
                  <p
                    className={`mt-1 ${isSelected ? "text-indigo-600 dark:text-indigo-300" : "text-gray-500 dark:text-gray-400"}`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
