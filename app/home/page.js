"use client";
import HeadlessTab from "@/components/NestedTab/HeadlessTab";
import Modal from "@/core/Modal";
import React, { useState } from "react";

const Page = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-2">
      {/* Modal  */}
      <button
        onClick={() => setShow(true)}
        className="bg-blue-400 p-4 text-white rounded-2xl"
      >
        Modal open
      </button>
      <Modal title="My Modal" onHide={() => setShow(false)} show={show}>
        <div className="min-w-[20rem] flex justify-between ">
          <h3>Hello</h3>
          <button
            onClick={() => setShow(false)}
            style={{ backgroundColor: "red", padding: "10px" }}
          >
            X
          </button>
        </div>
      </Modal>
      {/* Modal  */}
      {/* nested tab  */}
      <HeadlessTab />

      {/* nested tab  */}
    </div>
  );
};

export default Page;
