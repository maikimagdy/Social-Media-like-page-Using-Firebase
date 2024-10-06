import { useState } from "react";

export const useCounter = () => {
  const [num, setstate] = useState(0);
  const Subtract = () => {
    setstate((prev) => prev - 1);
  };
  const Add = () => {
    setstate((prev) => prev + 1);
  };
  const Reset = () => {
    setstate(0);
  };
  return [num, Subtract, Add, Reset];
};
