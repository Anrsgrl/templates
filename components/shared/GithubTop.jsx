import React from "react";
import { SiGithub } from "react-icons/si";
import { GoBook } from "react-icons/go";
import { TbTemplate } from "react-icons/tb";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import { useRouter } from "next/navigation";
const GithubTop = ({ active }) => {
  const t = useTranslations("Top");
  const navigate = useRouter();
  const MENU = [
    {
      label: t("overview"),
      value: "overview",
      icon: <GoBook size={16} />,
    },
    {
      label: t("templates"),
      value: "templates",
      icon: <TbTemplate size={16} />,
    },
  ];
  return (
    <div className="px-4 border-b border-zinc-400 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-md w-fit">
          <SiGithub className=" w-6 sm:w-8 h-6 sm:h-8" />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Anrsgrl"
            className="font-semibold px-2 py-1.5 hover:bg-zinc-500/40 rounded-md"
          >
            Anrsgrl
          </a>
        </div>
        <LanguageChanger />
      </div>
      <div className="pt-5 flex gap-4 text-base">
        {MENU.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => navigate.push(`/?tab=${item.value}`)}
            className={`border-b-2 border-transparent ${
              active === item.value
                ? "!border-green-400"
                : !active && index === 0
                ? "!border-green-400"
                : ""
            } group`}
          >
            <div className="flex items-center gap-2 px-2 py-1 mb-1 rounded-md group-hover:bg-zinc-700">
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GithubTop;
