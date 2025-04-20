/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MyComponent = () => {
    const [visible ,setVisible ] = useState(true);

    const HandelVisible=()=>{
        setVisible((prev)=>! prev )
    }

  return (
    <>
        <div className='flex flex-col justify-center items-center p-30'>
        <motion.button className='bg-blue-200 w-30 h-12 rounded-md cursor-pointer'
        whileTap={{scale:1.5 , background:"red", rotate:-20, }}
        transition={{duration:0.5}}
        onClick={HandelVisible}>
          CLick ME
        </motion.button>


    <AnimatePresence>
        {visible && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className='bg-orange-200 mt-30 h-20 w-40 rounded-md flex items-center justify-center'
            >
                Hellow
            </motion.div>
        )}
    </AnimatePresence>
    </div>
    </>
  );
};

export default MyComponent;
