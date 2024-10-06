import React from "react";

function Task({ CompletedFun, DelFun, e }) {
  return (
    <div className="flex justify-between items-center p-3 m-3 w-1/2">
      <h1
        className={`${
          e.comp && "text-green-500 font-bold line-through"
        } text-2xl `}
      >
        {e.name}
      </h1>
      <div className="flex justify-between gap-3">
        <button
          className="bg-green-600 px-4 py-2 rounded-lg text-white"
          onClick={() => CompletedFun(e.id)}
        >
          ✔
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded-lg text-white"
          onClick={() => DelFun(e.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Task;
