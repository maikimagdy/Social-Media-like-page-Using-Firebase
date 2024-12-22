import React from "react";
import { useCounter } from "./useCounter";

function Quiz() {
  const [num, add, substract, Settozero] = useCounter();
  return (
    <div>
      <div>{num}</div>
      <button onClick={add}>Add</button>
      <button onClick={substract}>Minus</button>
      <button onClick={Settozero}>Reset</button>
    </div>
  );
}

export default Quiz;
