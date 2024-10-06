import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Nav from "./pages/Nav";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Catfact from "./components/Catfact";
import Reactform from "./components/Reactform";
import { useToggle } from "./useToggle";
import Counter from "./components/Counter";
import Login from "./Project/pages/Login";
import Home from "./Project/pages/Home";
import Navbar from "./Project/components/Navbar";
import createPost from "./Project/pages/posting/CreatePost";
import CreatePost from "./Project/pages/posting/CreatePost";
function App() {
  // const [inp, setInp] = useState("");
  // const [arr, setArr] = useState([]);
  // const [toggleBtn, ToggleFun] = useToggle();
  // const AddFun = () => {
  //   const task = {
  //     id: arr.length ? arr[arr.length - 1].id + 1 : 1,
  //     name: inp,
  //     comp: false,
  //   };
  //   setArr((prev) => [...prev, task]);
  //   setInp("");
  // };

  // const CompletedFun = (id) => {
  //   setArr((prev) =>
  //     prev.map((task) => {
  //       if (id === task.id) {
  //         return { ...task, comp: !task.comp };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  // const DelFun = (id) => {
  //   const newArr = arr.filter((task) => task.id !== id);
  //   setArr(newArr);
  // };
  // const client = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // });
  return (
    // <div>
    //   <QueryClientProvider client={client}>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route element={<About />} path="/about" />
    //         <Route element={<Nav />} path="/nav" />
    //         {/* <Route element={<Catfact />} path="/query" /> */}
    //       </Routes>
    //     </BrowserRouter>
    //   </QueryClientProvider>
    //   <div className="py-4 my-4 ">
    //     <input
    //       className="outline-none shadow-md w-1/2 py-2 mx-3 "
    //       value={inp}
    //       placeholder="Type Your task Here"
    //       onChange={(e) => setInp(e.target.value)}
    //     />
    //     <button
    //       onClick={AddFun}
    //       className="cursor-pointer bg-slate-800 px-4 py-2 rounded-md text-white hover:bg-slate-400"
    //     >
    //       Add Task
    //     </button>
    //   </div>
    //   <div>
    //     {arr.map((e) => (
    //       <Task key={e.id} e={e} DelFun={DelFun} CompletedFun={CompletedFun} />
    //     ))}
    //   </div>
    //   <div>
    //     <Reactform />
    //   </div>
    //   <Counter />
    // </div>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Home />} path="/" />
          <Route element={<CreatePost />} path="/createpost" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
