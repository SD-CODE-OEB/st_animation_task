import React from "react";
import { motion } from "framer-motion";

const BorderText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={`absolute text-4xl md:text-6xl font-bold text-transparent ${className}`}
      style={{
        WebkitTextStroke: "1px white",
        opacity: 0.2,
      }}
      animate={{ x: [-1, 1, -1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeIn",
      }}
    >
      {text}
    </motion.div>
  );
};

export default BorderText;
