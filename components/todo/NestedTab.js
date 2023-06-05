"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

const NestedTab = () => {
  const [tab, setTab] = useState("gojo");
  return (
    <div>
      <div className="h-48 bg-[url(https://i.pinimg.com/564x/f2/32/41/f2324123ed322610368ebc8c8c871b6e.jpg)] bg-contain">
        <div className="flex justify-center items-center pt-2 mb-4 gap-4">
          <Button onClick={()=>setTab("gojo")} size="sm">gojo</Button>
          <Button onClick={()=>setTab("luffy")} size="sm">Luffy</Button>
          <Button onClick={()=>setTab("zoro")} size="sm">zoro</Button>
        </div>
        {/* content */}
        <div className="flex justify-center items-center">
          {/* one */}
          {tab === "gojo" && (
            <div className="flex justify-center items-center">
              <Image
                src={
                  "https://i.pinimg.com/564x/86/ba/5a/86ba5aedd4e549bba6a1ffb2138d119b.jpg"
                }
                alt="anime1"
                height={100}
                width={100}
              />
            </div>
          )}
          {tab === "luffy" && (
            <div className="flex justify-center items-center">
              <Image
                src={
                  "https://i.pinimg.com/564x/9d/d9/f1/9dd9f1b80bacbf44530ceb98ca2d8003.jpg"
                }
                alt="anime1"
                height={100}
                width={100}
              />
            </div>
          )}
          {tab === "zoro" && (
            <div className="flex justify-center items-center">
              <Image
                src={
                  "https://i.pinimg.com/564x/d7/8a/41/d78a41bd80994a13b3d54256c3f2a477.jpg"
                }
                alt="anime1"
                height={100}
                width={100}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NestedTab;
