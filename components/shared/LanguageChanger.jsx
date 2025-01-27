import { useLocale } from "next-intl";
import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
const LanguageChanger = () => {
  const [show, setShow] = useState(false);
  const locale = useLocale();
  return (
    <div className="flex items-center gap-2 text-sm">
      {show && (
        <div>
          <button
            type="button"
            className={`${locale === "en" ? "text-emerald-500" : ""}`}
          >
            EN
          </button>
          <span className="mx-2 opacity-50">/</span>
          <button
            type="button"
            className={`${locale === "az" ? "text-green-500" : ""}`}
          >
            AZ
          </button>
        </div>
      )}
      <button type="button" onClick={() => setShow(!show)}>
        <GrLanguage className=" w-6 sm:w-8 h-6 sm:h-8" />
      </button>
    </div>
  );
};

export default LanguageChanger;
