"use client";
import Modal from "@/core/Modal";
import React, { useState } from "react";

const page = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      home
      <button onClick={() => setShow(true)} style={{ backgroundColor: "plum" }}>
        open
      </button>
      <Modal title="My Modal" onHide={() => setShow(false)} show={show}>
        <div className="min-w-[20rem] flex justify-between ">
          <h3>Hello</h3>
          <button
            onClick={() => setShow(false)}
            style={{ backgroundColor: "red",padding :"10px"}}
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default page;
