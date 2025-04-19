import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // also added destructuring import

const Basics= () => {
  return (
    <>
      <div className="flex flex-col gap-30 justify-center items-center mb-20  ">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 4,  }} 
          className="w-40 h-40 bg-blue-500 rounded-md"
        ></motion.div>

        <motion.button
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="w-30 h-20 bg-green-300 rounded-md border-2 z-10  "
        >
          <h1 className="font-thin rounded-md ">Explore now</h1>
        </motion.button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 bg-blue-200 rounded-md z-0  "
        ></motion.div>

        <motion.div
          initial={{ rotate: -180 }}
          animate={{ rotate: 180, scale: 2 , repeat:Infinity }}
          transition={{ duration: 1 }}
          className="w-40 h-40 bg-orange-200 rounded-md z-0  "
        ></motion.div>

        <motion.button
          initial={{ x: 100,y:100, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, y:0, scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="px-6 py-2 bg-red-500 text-white rounded"
        >
          View Products
        </motion.button>


      </div>
    </>
  );
};

export default Basics;
