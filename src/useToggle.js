import { useState } from "react";

export const useToggle = () => {
  const [state, setstate] = useState(false);
  const Toggle = () => {
    setstate((prev) => !prev);
  };
  return [state, Toggle];
};
