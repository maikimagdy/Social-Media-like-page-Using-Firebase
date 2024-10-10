import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Project/pages/Login";
import Home from "./Project/pages/Home";
import Navbar from "./Project/components/Navbar";
import Eachpost from "./Project/pages/posting/Eachpost";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Home />} path="/" />
          <Route element={<Eachpost />} path="/createpost" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
