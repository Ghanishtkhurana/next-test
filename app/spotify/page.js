"use client";
import HeadlessTab from "@/components/spotify/HeadlessTab";
import UseGetMovie from "@/libs/queries/movie/useGetMovie";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const page = () => {
  const path = usePathname()

  console.log("path", path);
  return (
    <div className="w-full h-full">
      <h4>Spotify</h4>
      <HeadlessTab />
    </div>
  );
};

export default page;
