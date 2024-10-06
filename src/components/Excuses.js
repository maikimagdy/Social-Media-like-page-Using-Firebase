import axios from "axios";
import React, { useEffect, useState } from "react";

function Excuses() {
  const [word, setword] = useState("");
  const [excuse, setexcuse] = useState("");
  useEffect(() => {
    const fetchData = () => {
      if (word) {
        axios
          .get(`https://excuser-three.vercel.app/v1/excuse/${word}/`)
          .then((res) => {
            setexcuse(res.data[0].excuse);
          });
      }
    };
    fetchData();
  }, [word]);
  return (
    <div>
      <button
        className="m-4 px-6 py-2 text-white bg-green-500 rounded"
        onClick={() => {
          setword("party");
        }}
      >
        party
      </button>
      <button
        className="m-4 px-6 py-2 text-white bg-green-500 rounded"
        onClick={() => {
          setword("family");
        }}
      >
        Family
      </button>
      <button
        className="m-4 px-6 py-2 text-white bg-green-500 rounded"
        onClick={() => {
          setword("office");
        }}
      >
        Office
      </button>
      <p>
        Ur Excuse is {!excuse && `(press btn to generate...)`} {excuse}{" "}
      </p>
    </div>
  );
}

export default Excuses;
