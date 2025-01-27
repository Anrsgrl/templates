import React, { useEffect, useState } from "react";
import { GoRepoTemplate } from "react-icons/go";
import { copyToClipboard } from "@/utils/helpers";
import { SiGithub } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import CountUp from "react-countup";
const Repo = ({ url, onlyStar, star }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
          setError(true);
          console.error("Error fetching data:", err);
        });
    }
  }, [url]);

  if (error) return "";

  if (onlyStar) {
    return (
      <a
        href={data?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white hover:bg-gray-700 hover:bg-gray-600 transition duration-300"
      >
        <SiGithub className="w-5 h-5" />
        <span>{star}</span>

        <span className="flex items-center gap-1 bg-gray-800 text-yellow-400 px-2 py-1 rounded-full text-sm">
          <BsStarFill className="w-3 h-3" />
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
    <div className="flex flex-col gap-1 py-6 border-b border-zinc-300/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
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
            className="py-2 px-4 bg-zinc-900 border border-zinc-800 rounded-md flex items-center gap-1 text-emerald-500 text-semibold hover:text-emerald-500/80 animated-all text-sm"
          >
            <GoRepoTemplate className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:block">Use this template</span>
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.html_url}
            className="py-2 px-4 bg-zinc-900 border border-zinc-800 rounded-md flex items-center gap-1 text-yellow-500 text-semibold hover:text-yellow-500/80 animated-all"
          >
            <BsStarFill className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm hidden sm:block">
              <CountUp start={0} end={data?.stargazers_count} duration={2.5} />
            </span>
          </a>
        </div>
      </div>
      <p className="opacity-60 pt-1 text-sm">{data?.description}</p>
    </div>
  );
};

export default Repo;
