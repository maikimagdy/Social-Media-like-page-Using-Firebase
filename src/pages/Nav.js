import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function Nav() {
  const { name } = useContext(ThemeContext);
  const { setname } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => setname((prev) => (prev === "Maiki" ? "mina" : "Maiki"))}
        className="cursor-pointer"
      >
        Change Name
      </button>
      : {name}
    </div>
  );
}

export default Nav;
