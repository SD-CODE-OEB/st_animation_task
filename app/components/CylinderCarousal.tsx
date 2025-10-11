import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useSpring,
} from "framer-motion";
import ImageCard from "./ImageCard";

const CylinderCarousal = () => {
  const images = [
    "/tshirt-1.jpg",
    "/tshirt-2.jpg",
    "/tshirt-3.jpg",
    "/nextjsImageLoad.jpg",
    "tshirt-1.jpg",
    "/tshirt-2.jpg",
    "/tshirt-3.jpg",
    "/nextjsImageLoad.jpg",
    "/tshirt-1.jpg",
    "/tshirt-3.jpg",
  ];

  const CYLINDER_RADIUS = 750;
  const EDGE_THRESHOLD = 100;
  const AUTO_SCROLL_SPEED = 0.4;

  const rotationTarget = useMotionValue(0);
  const rotation = useSpring(rotationTarget, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRotation = useRef(0);

  const angleStep = 360 / images.length; // distance between images and their angle

  // Handle edge auto-scroll
  useAnimationFrame(() => {
    if (!isDragging && mouseX !== null && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const currentRotation = rotationTarget.get();

      if (mouseX < EDGE_THRESHOLD) {
        const intensity = (EDGE_THRESHOLD - mouseX) / EDGE_THRESHOLD;
        rotationTarget.set(currentRotation - AUTO_SCROLL_SPEED * intensity);
      } else if (mouseX > containerWidth - EDGE_THRESHOLD) {
        const intensity =
          (mouseX - (containerWidth - EDGE_THRESHOLD)) / EDGE_THRESHOLD;
        rotationTarget.set(currentRotation + AUTO_SCROLL_SPEED * intensity);
      }
    }
  });

  const handleDragStart = () => {
    setIsDragging(true);
    dragStartRotation.current = rotationTarget.get();
  };

  const handleDrag = (_: any, info: any) => {
    const rotationChange = info.offset.x * 0.3;
    rotationTarget.set(dragStartRotation.current + rotationChange);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  };

  return (
    //screen ends scrolling effects container
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseX(null)}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-500/80 via-red-600/50 to-red-700/80 overflow-hidden"
    >
      {/* perspective container */}
      <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing p-20 perspective-distant">
        {/* draggable container */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={() => setIsDragging(false)}
          style={{
            rotateY: rotation,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full py-20"
        >
          {images.map((src, index) => {
            const angle = index * angleStep;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 p-20"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(-${CYLINDER_RADIUS}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
              >
                <ImageCard src={src} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CylinderCarousal;
