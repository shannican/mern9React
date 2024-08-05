import React from "react";
import { motion } from "framer-motion";

const App = () => {

  const newVariants = {
    start:{
      opacity:0,
      x:0
    },
    end:{
      opacity:1,
      x:500
    }
  }
  
  return (
    <div>
      <motion.div 
      variants={newVariants}
      initial={newVariants.start}
      animate={newVariants.end}
      transition={{
        duration:2,
        delay:1
      }}
      className="box"
      >
        
      </motion.div>
      <motion.div variants={newVariants} initial={newVariants.start} animate={newVariants.end} transition={{duration:2}} className="box"></motion.div>
      <motion.div 
      drag
      dragConstraints={{
        top:0,
        left:0,
        bottom:300,
        right:700
      }}
      dragDirectionLock='true'
      whileHover={{
        backgroundColor:"royalblue"
      }}
      whileDrag={{
        scale:0.95
      }}

      className='box'
      >

      </motion.div>
    </div>
  );
};

export default App;
