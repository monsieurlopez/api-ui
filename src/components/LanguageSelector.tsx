import { useLanguage } from "../hooks/useLanguage";

const languageOptions = [
  { language: "English", code: "en" },
  { language: "French", code: "fr" },
  { language: "Spanish", code: "es" },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200
        dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 min-w-24"
    >
      {languageOptions.map(({ language, code }) => (
        <option key={code} value={code}>
          {language}
        </option>
      ))}
    </select>
  );
};
