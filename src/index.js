import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assuming your main component is App
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
