import { Tag } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

type HeaaderContainProps = {
  titleKey: string;
  descriptionKey: string;
};

export const HeaderContain: React.FC<HeaaderContainProps> = ({
  titleKey,
  descriptionKey,
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "home";

  return (
    <div className="text-left max-w-xl mb-10">
      <Tag bordered color="blue" className="max-w-max font-semibold">
        <span className="uppercase">{t(`pages.${path}`)}</span>
      </Tag>
      <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-gray-100">
        {t(titleKey)}
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-wrap">
        {t(descriptionKey)}
      </p>
    </div>
  );
};
