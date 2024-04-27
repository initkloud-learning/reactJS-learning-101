import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const githubData = useLoaderData();
  // useEffect(() => {
  //     fetch("https://api.github.com/users/ashupanwar10")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setGithubData(data);
  //       });
  //   }, []);

  return (
    <div>
      <div className="bg-gray-600 text-white p-4 m-4 text-center text-3xl">
        Followers: {githubData.followers}
        <img src={githubData.avatar_url} alt={githubData.login} width={300} />
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ashupanwar10");
  const data = await response.json();
  return data;
};
