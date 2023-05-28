"use client";
import HoverBadge from "@/core/HoverBadge";
import Image from "next/image";
import React, { useState } from "react";

const Card = ({ data }) => {
  return (
    <div className="flex gap-4 flex-col shadow-2xl rounded-2xl ">
      <div>
        <Image
          className="rounded-t-xl"
          src={data.avatar}
          alt="user"
          height={150}
          width={150}
        />
      </div>
      <div className="flex justify-center m-2">
        <HoverBadge firstN={data.first_name} lastN={data.last_name} />
      </div>
    </div>
  );
};

export default Card;
