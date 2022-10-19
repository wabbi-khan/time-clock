import React from "react";
import { WatchData } from "../utils/data";
import { motion } from "framer-motion";
const Watches = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='wacthHead'>
            <h1>everyone's desires</h1>
            <span>Watches</span>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='watchBtnContent'>
            {WatchData.map((item) => (
              <motion.button
                whileFocus={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                className='watchBtnBg'
                key={item.id}
              >
                <div className='watchIcnon'>{item.icon}</div>
                <div className='watchName mt-2'> {item.name} </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
