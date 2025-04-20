/* eslint-disable no-unused-vars */
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Slide = () => {
   const [open , setOpen] = useState(false);

   const handelOpen =()=>{
    setOpen((perv)=>!perv)
   }
  return (
    <>
    <div className='flex flex-col justify-center items-center p-30'>
     <button className= ' cursor-pointer bg-pink-300 w-40 h-20 rounded-md' onClick={handelOpen}>CLICK ME </button>
    
      <AnimatePresence>
        {open && (
          <motion.div
          className='bg-green-400 fixed top-0 right-0 h-screen w-96'
          initial={{x:700}}
          animate={{x:0}}
          exit={{x:500}}
          transition={{duration:1}}
          > Slider </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  )
}

export default Slide
  