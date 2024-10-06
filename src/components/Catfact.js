import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Catfact() {
  const {
    data: Catdata,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn: async () => {
      try {
        const res = await axios.get("https://catfact.ninja/fact");
        return res.data;
      } catch (err) {
        throw new Error("Error fetching Data");
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>; // Displays "Error fetching cat fact"
  }

  return (
    <div>
      This is the Cat fact: {Catdata?.fact}
      <button
        className="cursor-pointer bg-slate-800 px-4 py-2 rounded-md text-white hover:bg-slate-400"
        onClick={() => refetch()}
      >
        Refetch Data{" "}
      </button>
    </div>
  );
}

export default Catfact;
