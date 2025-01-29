import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

const LanguageChanger = () => {
  const locale = useLocale();
  const languages = [
    { code: "en", label: "EN" },
    { code: "az", label: "AZ" },
  ];

  return (
    <div className="relative flex items-center bg-zinc-800 rounded-full p-1">
      <div
        className={`absolute left-1 top-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-emerald-500 rounded-full transition-transform duration-300 ease-in-out ${
          locale === "az" ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
      {languages.map(({ code, label }) => (
        <Link
          key={code}
          href="/"
          locale={code}
          replace
          className={`relative z-10 flex-1 text-center py-1 px-2 text-xs font-semibold transition-colors duration-300 ${
            locale === code ? "text-white" : "text-zinc-400"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default LanguageChanger;
