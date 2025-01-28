"use client";
import Overview from "@/components/layout/Overview";
import GithubTop from "@/components/shared/GithubTop";
import RepoList from "@/components/shared/RepoList";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <div className="p-4 flex justify-center items-center container mx-auto h-[95lvh] overflow-hidden">
      <div className="w-full h-[90lvh] bg-gradient-to-br bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 rounded-md relative border-2 border-zinc-300">
        <div className="relative flex items-center gap-2 w-full border-b-2 border-zinc-300 py-4 px-4 bg-gradient-to-r from-zinc-900 to-zinc-950 ">
          <div className="rounded-full w-4 h-4 bg-mac-red"></div>
          <div className="rounded-full w-4 h-4 bg-mac-yellow"></div>
          <div className="rounded-full w-4 h-4 bg-mac-green"></div>
        </div>
        <div className="py-4 pb-0 h-3/4">
          <GithubTop active={tab} />
          <div className="h-full">
            {tab === "templates" ? <RepoList /> : <Overview />}
          </div>
        </div>
      </div>
    </div>
  );
}
