import React from "react";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="mt-5 border-4 border-yellow-300 p-10">
      <div className="mb-4 flex cursor-none items-center justify-center rounded-full">
        <img
          src={avatar_url}
          className="h-[300px] w-auto bg-center"
          alt="User"
        />
      </div>
      <div>
        <a
          href={`https://github.com/${login}`}
          className="m-3 text-4xl font-bold hover:text-blue-400 hover:underline hover:delay-150"
        >
          {name || login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", { month: "short" })} ${createdDate.getFullYear()}`}
        </p>
        <div>
          <p>Public Repos :</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers :</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following :</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
