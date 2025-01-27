"use client";
import React from "react";
import Input from "../common/Input";
import Repo from "./Repo";
import { REPO_LIST } from "@/utils/constants";

const RepoList = () => {
  const data = REPO_LIST;
  return (
    <div className="w-full h-full py-4">
      <Input />
      <div className="h-full overflow-y-auto">
        {data?.map((repo, index) => (
          <Repo url={repo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
