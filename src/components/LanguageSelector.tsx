import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const languageOptions = [{ code: "en" }, { code: "fr" }, { code: "es" }];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200
        dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 min-w-24"
    >
      {languageOptions.map(({ code }) => (
        <option key={code} value={code}>
          {t(`language.${code}`)}
        </option>
      ))}
    </select>
  );
};
