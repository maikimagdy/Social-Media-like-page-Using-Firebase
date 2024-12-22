import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import FormPage from "./FormPage";
import Quiz from "./Quiz";

function Review() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Could not fetch data</div>;

  return (
    <div>
      {/* <h1> {data?.fact}</h1>
      <p>
        <button onClick={refetch}>Refetch</button>
      </p>
      <FormPage /> */}
      <Quiz />
    </div>
  );
}

export default Review;
