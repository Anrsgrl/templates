import React from "react";
import Repo from "../shared/Repo";
import { useTranslations } from "next-intl";

const Overview = () => {
  const t = useTranslations("Overview");
  return (
    <div className="py-10 px-6 text-white flex flex-col items-center h-full overflow-auto font-mono">
      <div className="max-w-4xl w-full text-center flex flex-col sm:justify-center items-center h-full">
        <h1 className="text-4xl font-extrabold mb-6 text-emerald-400 animate-pulse">
          {t("heading")} 🚀
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          {t("paragraph1")}
        </p>
        <p className="text-gray-300 mb-6">{t("paragraph2")}</p>
        <Repo
          url={`https://api.github.com/repos/Anrsgrl/templates`}
          star={t("star")}
          onlyStar={true}
        />
      </div>
    </div>
  );
};

export default Overview;
