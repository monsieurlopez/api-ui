import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { code: "en", labelKey: "language.en" },
  { code: "fr", labelKey: "language.fr" },
  { code: "es", labelKey: "language.es" },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <fieldset className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto">
      <legend className="sr-only">Select Language</legend>
      {languageOptions.map(({ code, labelKey }) => {
        const isSelected = language === code;

        return (
          <label
            key={code}
            htmlFor={`lang-${code}`}
            className={`
              flex items-center gap-3 rounded-md border p-3 cursor-pointer transition justify-center
              ${
                isSelected
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              }
            `}
          >
            <input
              type="radio"
              id={`lang-${code}`}
              name="language"
              value={code}
              checked={isSelected}
              onChange={() => setLanguage(code)}
              className="h-3 w-3 accent-indigo-600 dark:accent-indigo-400"
            />
            <span className="text-sm font-medium">{t(labelKey)}</span>
          </label>
        );
      })}
    </fieldset>
  );
};
