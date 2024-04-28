"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = () => {
  return (
    <>
      {/* Motion Image on the Home Page */}
      <motion.img
        src="/p6.png"
        className="w-full h-20 z-10 right-0"
        style={{ maxWidth: "100%", transformOrigin: "left" }}
        alt="dj-party"
        animate={{ scaleX: [1, 0.7] }}
        transition={{
          duration: 3,
          type: "tween",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};

export default MotionImage;
