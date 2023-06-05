"use client";
import Card from "@/components/movie/Card";
import useGetMovies from "@/libs/queries/movie/useGetMovie";
import axios from "axios";
import React from "react";

const getData = async () => {
  const res = await axios.get("https://reqres.in/api/users");
  return res.data.data;
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      <div className="flex justify-around flex-wrap gap-3">
        {data.map((el, i) => (
          <Card data={el} />
        ))}
      </div>
    </div>
  );
};

export default page;
