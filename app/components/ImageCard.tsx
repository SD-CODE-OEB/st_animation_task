import React from "react";
import { motion } from "framer-motion";
const ImageCard = ({ src }: { src: string }) => {
  return (
    <div
      className="relative inline-block"
      style={{ isolation: "isolate", height: "320px" }}
    >
      {/* Main Interactive Card */}
      <motion.div
        initial={{ height: 320 }}
        whileHover={{ height: 450 }}
        transition={{
          duration: 0.8,
        }}
        className="relative overflow-hidden shadow-lg w-[450px] h-[380px] rounded-lg"
      >
        <img
          src={src}
          alt="Image Description"
          className="h-full w-full"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-4 absolute text-center space-y-2 z-50 top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex flex-col justify-center"
        >
          <h2 className="text-white font-bold text-md text-center">
            Image Title
          </h2>
          <p className="text-xs text-white px-4">
            Description of the image. Lorem ipsum, dolor sdmsaldkit amet
            consectetur adipisicing elit. Commodi aut quas facilis minus atque
            hic! Lorem, ipsum dolor.
          </p>
        </motion.div>
      </motion.div>

      {/* Static Reflection */}
      <div
        className="absolute mt-3 left-0 w-[450px] h-[380px] rounded-lg overflow-hidden opacity-30 pointer-events-none shadow"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, transparent 100%)",
        }}
      >
        <img src={src} alt="" className="h-full w-full" loading="eager" />
      </div>
    </div>
  );
};

export default ImageCard;
