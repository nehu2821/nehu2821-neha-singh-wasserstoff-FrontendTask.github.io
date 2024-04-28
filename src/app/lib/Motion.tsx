"use client";
import React from "react";
import { motion } from "framer-motion";

const Motion = ({ children }: any) => {
  return (
    <>
      {/* Motion Transition Div on home page */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "-5%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex-[9]  bg-[rgb(255,244,223)]   z-10 h-full"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Motion;
