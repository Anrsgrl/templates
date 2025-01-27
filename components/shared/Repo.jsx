import React, { useEffect, useState } from "react";
import { GoRepoTemplate } from "react-icons/go";
import { copyToClipboard } from "@/utils/helpers";
import { SiGithub } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import CountUp from "react-countup";
const Repo = ({ url, onlyStar }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.error("Failed to fetch GitHub stars:", err));
    }
  }, []);

  if (onlyStar) {
    return (
      <a
        href={data?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white hover:bg-gray-700 hover:bg-gray-600 transition duration-300"
      >
        <SiGithub size={20} />
        <span>Star on github</span>

        <span className="flex items-center gap-1 bg-gray-800 text-yellow-400 px-2 py-1 rounded-full text-sm">
          <BsStarFill size={12} />
          {data?.stargazers_count === null ? (
            "?"
          ) : (
            <CountUp start={0} end={data?.stargazers_count} duration={2.5} />
          )}
        </span>
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-1 py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.html_url}
            className="text-xl text-sky-600 hover:underline"
          >
            {data?.name}
          </a>
          <div className="flex items-center gap-1 text-xs">
            <div
              className={`w-2 h-2 rounded-full ${
                data?.language === "TypeScript"
                  ? "bg-blue-400"
                  : "bg-yellow-400"
              }`}
            ></div>
            {data?.language}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              copyToClipboard(`git clone ${data?.html_url}`, "Kopyalandı")
            }
            type="button"
            className="py-2 px-4 bg-zinc-900 border border-zinc-800 rounded-md flex items-center gap-1 text-emerald-500 text-semibold hover:text-emerald-500/80 animated-all"
          >
            <GoRepoTemplate size={20} />
            <span>Use this template</span>
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.html_url}
            className="py-2 px-4 bg-zinc-900 border border-zinc-800 rounded-md flex items-center gap-1 text-yellow-500 text-semibold hover:text-yellow-500/80 animated-all"
          >
            <BsStarFill size={20} />
            <span>
              <CountUp start={0} end={data?.stargazers_count} duration={2.5} />
            </span>
          </a>
        </div>
      </div>
      <p className="opacity-80">{data?.description}</p>
    </div>
  );
};

export default Repo;
