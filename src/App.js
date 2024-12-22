import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Project/pages/Login";
import Home from "./Project/pages/Home";
import Navbar from "./Project/components/Navbar";
import Eachpost from "./Project/pages/posting/Eachpost";
import Review from "./Review/Review";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUp from "../src/Review/SignUp";
import LoginEmail from "../src/Review/LoginEmail";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<LoginEmail />} path="/loginemail" />
          <Route element={<Home />} path="/" />
          <Route element={<Eachpost />} path="/createpost" />
        </Routes>
      </BrowserRouter>
      {/* <QueryClientProvider client={client}>
        <Review />
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
