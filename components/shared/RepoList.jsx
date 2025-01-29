"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import { REPO_LIST } from "@/utils/constants";
import dynamic from "next/dynamic";
import SkeletonLoading from "@/components/common/SkeletonLoading";
const Repo = dynamic(() => import("@/components/shared/Repo"), {
  ssr: false,
  loading: () => <SkeletonLoading />,
});

const RepoList = () => {
  const [filterBy, setFilterBy] = useState("");
  const data = filterBy
    ? REPO_LIST.filter((e) => e.tech.includes(filterBy.toLocaleLowerCase()))
    : REPO_LIST;
  return (
    <div className="w-full h-full py-4">
      <div className="px-6">
        <Input
          type="search"
          name="search"
          onChange={(e) => setFilterBy(e.target.value)}
        />
      </div>
      <div className="h-full overflow-y-auto">
        <div className="px-6">
          {data?.length > 0 ? (
            data?.map((repo, index) => (
              <Repo url={repo.url} tech={repo.tech} key={index} />
            ))
          ) : (
            <div className="mt-2 text-sm text-zinc-400">
              Cannot find anything
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
