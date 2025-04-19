/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from "framer-motion"

const Drag = () => {
  return (
    <>
       <div className="flex flex-col gap-12 justify-center items-center mb-50">
            <motion.div
            drag
            dragConstraints={{left:-8 , right:290}}
            className="bg-blue-300 w-40 h-40 "
            ></motion.div>

<motion.div drag="x" whileDrag={{ opacity: 0.5 }} className="w-40 h-40 bg-green-500 rounded-lg" />

<motion.div drag="y" whileDrag={{ scale: 0.9 }} className="w-40 h-40 bg-red-500 rounded-lg" />

<motion.div
  initial={{ scale: 0.2, opacity: 0 }}
  animate={{ scale: 2, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-40 h-40 bg-pink-500 text-white flex items-center justify-center rounded"
>
  Pop!
</motion.div>

<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 2 }}
  className="w-40 h-40 bg-pink-500 text-white flex items-center justify-center rounded"
>
  Pop!
</motion.div>



       </div>
    </>
  )
}

export default Drag