import React from "react";
import Repo from "../shared/Repo";

const Overview = () => {
  return (
    <div className="py-10 px-6 text-white flex flex-col items-center h-full overflow-auto">
      <div className="max-w-4xl w-full text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-extrabold mb-6 text-emerald-400 animate-pulse">
          Streamline Your Development Workflow 🚀
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          Stop wasting time on repetitive setups! Our pre-built templates bring
          together tools like <strong>Next.js</strong>,{" "}
          <strong>next-intl</strong>, <strong>Zustand</strong> and more to help
          you hit the ground running. Focus on building your projects, not
          setting them up!
        </p>
        <p className="text-gray-300 mb-6">
          Choose a template, hit <strong>"Use Template"</strong>, and launch
          your project in seconds. Simplify your workflow and maximize
          productivity.
        </p>
        <Repo
          url={`https://api.github.com/repos/Anrsgrl/templates`}
          onlyStar={true}
        />
      </div>
    </div>
  );
};

export default Overview;
