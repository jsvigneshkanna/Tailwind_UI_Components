/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import {TbGitFork} from "react-icons/tb";
import {BsStarFill} from "react-icons/bs";

import useSWR from "swr";

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}
const GitStats = () => {
  const {data} = useSWR("/api/github", fetcher);

  return (
    <a
      className="gitstats_box "
      href="https://github.com/jsvigneshkanna/tailwind_ui_components"
      target="__blank" rel="noreferrer">
      <div className="gitstats_fork ">
        <TbGitFork className="mr-1" />
        <h2>{data ? data.forks : "Loading"}</h2>
      </div>
      <div className="gitstats_star">
        <BsStarFill className="mr-1" />
        <h2>{data ? data.stars : "Loading"}</h2>
      </div>
    </a>
  );
};

export default GitStats;
