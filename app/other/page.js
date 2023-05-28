"use client"
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import useGetMovie from '@/libs/queries/movie/useGetMovie';

// async function getUsers() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return res.data
// }

const page = () => {
  const {data,isLoading} = useGetMovie()
  console.log("userData",data)
  console.log("loading",isLoading)
  // const { data, isLoading, isFetching, error } = useQuery({
  //   queryKey: ["hydrate-users"],
  //   queryFn: () => getUsers(),
  // });

  // console.log("data",data)

  return (
    <div>
      ohter
    </div>
  )
}

export default page
