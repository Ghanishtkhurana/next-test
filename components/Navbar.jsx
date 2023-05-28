import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 mb-2 shadow-2xl">
      <Link href={"/"}>
        <div>
          <Image src={"/logo.png"} alt="logo" height={50} width={50} />
        </div>
      </Link>
      <div className="flex justify-center gap-6 list-none mr-5 mt-3">
        <Link href={"/home"}>
          <li>Home</li>
        </Link>
        <Link href={"/movie"}>
          <li>movie</li>
        </Link>
        <Link href={"/todo"}>
          <li>todo</li>
        </Link>
        <Link href={"/other"}>
          <li>other</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
