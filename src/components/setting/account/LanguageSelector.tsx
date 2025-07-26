import { useLanguage } from "../../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { Card } from "antd";
import flagEs from "../../../images/espagne.png";
import flagFr from "../../../images/france.png";
import flagEu from "../../../images/etats-unis.png";

const languageOptions = [
  { code: "en", labelKey: "language.en", flag: flagEu },
  { code: "fr", labelKey: "language.fr", flag: flagFr },
  { code: "es", labelKey: "language.es", flag: flagEs },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="max-w-full">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Language
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Choose your preferred language for the application.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-start items-stretch gap-4">
        {languageOptions.map(({ code, labelKey, flag }) => {
          const isSelected = language === code;
          return (
            <Card
              key={code}
              onClick={() => setLanguage(code)}
              style={{
                borderColor: isSelected ? "indigo" : "",
                minWidth: "12rem",
              }}
              className={`cursor-pointer transition-all border ${
                isSelected
                  ? "dark:bg-indigo-800 dark:border-indigo-400"
                  : "border-gray-200 hover:border-indigo-300 dark:border-gray-600 dark:hover:border-indigo-500"
              }`}
            >
              <div className="flex items-center justify-center gap-2 p-4">
                <img src={flag} alt={`${code} flag`} className="h-5" />
                <h3
                  className={`text-lg font-medium ${
                    isSelected
                      ? "text-indigo-800 dark:text-indigo-200"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {t(labelKey)}
                </h3>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
