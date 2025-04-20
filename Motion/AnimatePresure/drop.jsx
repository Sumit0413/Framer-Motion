/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Menu</button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="bg-gray-100 mt-2 rounded shadow p-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li className="p-1 hover:bg-gray-200">Profile</li>
            <li className="p-1 hover:bg-gray-200">Settings</li>
            <li className="p-1 hover:bg-gray-200">Logout</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Drop