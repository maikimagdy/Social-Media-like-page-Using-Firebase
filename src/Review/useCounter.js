import { useState } from "react";

export const useCounter = () => {
  const [num, setnum] = useState(0);

  const add = () => {
    setnum((prev) => prev + 1);
  };

  const substract = () => {
    setnum((prev) => prev - 1);
  };

  const Settozero = () => {
    setnum(0);
  };

  return [num, add, substract, Settozero];
};
