import Image from "next/image";
import Link from "next/link";
import React from "react";
import {DiUnitySmall} from "react-icons/di"

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 shadow-2xl bg-[#1F2937]">
      <Link href={"/"}>
        <div>
        <DiUnitySmall className="text-white w-8 h-8 hover:text-deep-purple-400 transition duration-500 hover:scale-125" />
        </div>
      </Link>
      <div className="flex justify-center gap-6 list-none mr-5 items-center">
        <Link href={"/home"}>
          <li className="text-white font-bold hover:text-deep-purple-400 transition duration-500 hover:scale-125">Home</li>
        </Link>
        <Link href={"/movie"}>
          <li className="text-white font-bold hover:text-deep-purple-400 transition duration-500 hover:scale-125">movie</li>
        </Link>
        <Link href={"/todo"}>
          <li className="text-white font-bold hover:text-deep-purple-400 transition duration-500 hover:scale-125">todo</li>
        </Link>
        <Link href={"/other"}>
          <li className="text-white font-bold hover:text-deep-purple-400 transition duration-500 hover:scale-125">other</li>
        </Link>
        <Link href={"/spotify"}>
          <li className="text-white font-bold hover:text-deep-purple-400 transition duration-500 hover:scale-125">spotify</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
