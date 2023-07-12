"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseGetMovie = () => {
  const allMovies = useQuery({
    queryKey: ["movieAll"],
    queryFn: async () => {
      console.log("query called")
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      // console.log("res",res)
      return res.data
    },
  });
  return allMovies
};

export default UseGetMovie