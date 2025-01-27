"use client";
import Overview from "@/components/layout/Overview";
import GithubTop from "@/components/shared/GithubTop";
import RepoList from "@/components/shared/RepoList";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="p-4 flex justify-center items-center container mx-auto h-[95lvh] overflow-hidden">
      <div className="w-full h-[90lvh] bg-gradient-to-br bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 rounded-md relative border-2 border-zinc-300">
        <div className="relative flex items-center gap-2 w-full border-b-2 border-zinc-300 py-4 px-4 bg-zinc-800">
          <div className="rounded-full w-6 h-6 bg-mac-red"></div>
          <div className="rounded-full w-6 h-6 bg-mac-yellow"></div>
          <div className="rounded-full w-6 h-6 bg-mac-green"></div>
        </div>
        <div className="py-4 pb-0 h-3/4">
          <GithubTop active={activeTab} setActive={setActiveTab} />
          <div className="h-full  px-6">
            {activeTab === "Templates" ? <RepoList /> : <Overview />}
          </div>
        </div>
      </div>
    </div>
  );
}
