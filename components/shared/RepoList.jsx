"use client";
import React from "react";
import Input from "../common/Input";
import Repo from "./Repo";
import { REPO_LIST } from "@/utils/constants";

const RepoList = () => {
  const data = REPO_LIST;
  return (
    <div className="w-full h-full py-4">
      <div className="px-6">
        <Input />
      </div>
      <div className="h-full overflow-y-auto">
        <div className="px-6">
          {data?.map((repo, index) => (
            <Repo url={repo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
