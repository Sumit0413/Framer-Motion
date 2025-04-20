/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item}
            className="bg-blue-200 p-2 my-2 rounded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Item {item}
            <button className="ml-4" onClick={() => removeItem(item)}>
              ❌
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default List ;