/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Focus = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 mt-20">
        <motion.input
          type="text"
          whileFocus={{ backgroundColor: "#e0f2fe" }}
          className="px-4 py-2 border rounded-md"
        ></motion.input>

        <motion.input
          type="text"
          whileFocus={{ borderColor: "#3b82f6" }}
          className="px-4 py-2 border border-gray-300 rounded"
        />

        <motion.input
          type="text"
          whileFocus={{ scale: 2 }}
          className="px-4 py-2 border border-gray-400 rounded"
        />

        <motion.input
          type="text"
          whileFocus={{ boxShadow: "0px 0px 10px #3b82f6" }}
          className="px-4 py-2 border border-gray-300 rounded"
        />

        <motion.input
          type="text"
          placeholder="Type here"
          whileFocus={{ color: "#1e40af" }}
          className="px-4 py-2 border rounded placeholder-gray-400"
        />
      </div>
    </>
  );
};

export default Focus;
