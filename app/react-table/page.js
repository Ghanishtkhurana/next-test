"use client";
import BasicTable from "@/components/react-table/BasicTable";
import React, { useState, useEffect } from "react";

const page = () => {
 
  return (
    <div className="flex flex-col justify-center items-center">
      <h4>React Table</h4>
      <BasicTable />
    </div>
  );
};

export default page;
