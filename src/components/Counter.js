import React from "react";
import { useCounter } from "./useCounter";

function Counter() {
  const [num, Sub, Add, Reset] = useCounter();
  return (
    <div>
      <button className="bg-red-300 text-white p-4 m-4 rounded" onClick={Sub}>
        decrease
      </button>
      <button className="bg-red-300 text-white p-4 m-4 rounded" onClick={Add}>
        increase
      </button>
      <button className="bg-red-300 text-white p-4 m-4 rounded" onClick={Reset}>
        Reset
      </button>
      <p>{num}</p>
    </div>
  );
}

export default Counter;
