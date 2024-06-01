import React from "react";

const NotFound = () => {
  return (
    <div className={"layout-animate"}>
      <div className={"w-full md:max-w-screen-sm m-10 ml-0"}>
        <div
          className={
            "text-6xl text-slate-950 bg-gradient-to-tl font-extrabold from-pink-700 to-violet-700 inline-block" +
            " text-transparent bg-clip-text"
          }
        >
          404
        </div>
        <div className={"text-slate-500"}>
          The page you requested was not found on our server.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
