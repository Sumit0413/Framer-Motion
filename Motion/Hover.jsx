/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Hover = () => {
  return (
    <>
      <div className="flex flex-col gap-12 justify-center items-center mb-50">
        <motion.div
          whileHover={{ scale: 2 }}
          transition={{ duration: 1 }}
          className="bg-amber-200 h-40 w-40 rounded-md cursor-pointer mt-20 "
        ></motion.div>

        <motion.div
          whileHover={{ background: "red", scale: 2 }}
          transition={{ duration: 1 }}
          className="bg-blue-200 h-40 w-40 rounded-md cursor-pointer mt-20 "
        ></motion.div>

        <motion.div
          whileHover={{ rotate: -90, scale: -1 }}
          transition={{ duration: 1 }}
          className="bg-pink-200 h-40 w-40 rounded-md cursor-pointer mt-20 "
        ></motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-20 h-20 bg-indigo-500 rounded-md flex items-center justify-center text-white"
        >
          Hover Bounce
        </motion.div>

        <motion.div
        whileHover={{scale:2, boxShadow:"5px 10px 10px rgba(0, 0, 0, 0.3)"  }}
        transition={{duration:0.5}}
        className="bg-pink-200 h-40 w-40 rounded-md cursor-pointer mt-20 "
        ></motion.div>
      </div>
    </>
  );
};

export default Hover;
