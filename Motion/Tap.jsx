/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Tap = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 mt-20">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2  bg-indigo-600 text-white rounded-md cursor-pointer"
        >
          Tap Me
        </motion.button>

        <motion.button
          whileTap={{ opacity: 0.6 }}
          className="px-6 py-2 bg-red-500 text-white rounded"
        >
          Tap Opacity
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9, rotate: -5 }}
          className="px-6 py-2 bg-orange-600 text-white rounded"
        >
          Tap Rotate
        </motion.button>

        <motion.button whileTap={{ y: -10 }} className="px-6 py-2 bg-lime-600 text-white rounded">
             Tap Jump
    </motion.button>

      </div>
    </>
  );
};

export default Tap;
