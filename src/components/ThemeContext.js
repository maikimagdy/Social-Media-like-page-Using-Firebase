import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [name, setname] = useState("Maiki");

  return (
    <ThemeContext.Provider value={{ name, setname }}>
      {children}
    </ThemeContext.Provider>
  );
};
