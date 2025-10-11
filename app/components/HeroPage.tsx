import BorderText from "./BorderText";
import { motion } from "framer-motion";

const HeroPage = () => {
  const leftSideText = [
    {
      text: "transform",
      position: "top-[15%] md:top-[20%] left-[10%] md:left-[40%] lg:left-[40%]",
    },
    {
      text: "trust",
      position: "top-[35%] md:top-[40%] left-[20%] md:left-[40%] lg:left-[40%]",
    },
    {
      text: "achieve",
      position: "top-[55%] md:top-[60%] left-[60%] md:left-[80%] lg:left-[80%]",
    },
    {
      text: "grow",
      position: "top-[75%] md:top-[80%] left-[5%] md:left-[20%] lg:left-[20%]",
    },
  ];

  const rightSideText = [
    {
      text: "Connect",
      position:
        "top-[15%] md:top-[20%] right-[10%] md:right-[30%] lg:right-[30%]",
    },
    {
      text: "create",
      position:
        "top-[35%] md:top-[40%] right-[5%] md:right-[10%] lg:right-[10%]",
    },
    {
      text: "dreams",
      position:
        "top-[45%] md:top-[50%] right-[70%] md:right-[90%] lg:right-[90%]",
    },
    {
      text: "community",
      position:
        "top-[75%] md:top-[80%] right-[5%] md:right-[10%] lg:right-[10%]",
    },
  ];
  const middleImages = [
    {
      src: "/group.svg",
      alt: "Group",
      className:
        "absolute bottom-[10%] md:bottom-[15%] left-[30%] md:left-[40%] scale-75 md:scale-95 opacity-40",
    },
    {
      src: "/group.svg",
      alt: "Group",
      className:
        "absolute bottom-[10%] md:bottom-[10%] left-[20%] md:left-[50%] scale-75 md:scale-95 opacity-40",
    },
    {
      src: "/group.svg",
      alt: "Group",
      className:
        "absolute bottom-[10%] md:bottom-[0%] left-[20%] md:left-[50%] scale-75 md:scale-95 opacity-40",
    },
    {
      src: "/group2.svg",
      alt: "Group2",
      className:
        "absolute bottom-[0%] md:bottom-[0%] right-[65%] md:right-[10%] scale-100 md:scale-125 opacity-40",
    },
    {
      src: "/group.svg",
      alt: "Group",
      className:
        "absolute bottom-[10%] md:bottom-[0%] left-[20%] md:left-[30%] scale-75 md:scale-95 opacity-40",
    },
    {
      src: "/group2.svg",
      alt: "Group2",
      className:
        "absolute bottom-[0%] md:bottom-[25%] right-[65%] md:right-[10%] scale-100 md:scale-125 opacity-40",
    },
    {
      src: "/group2.svg",
      alt: "Group2",
      className:
        "absolute bottom-[0%] md:bottom-[30%] right-[45%] md:right-[35%] scale-100 md:scale-125 opacity-40",
    },
    {
      src: "/img1.svg",
      alt: "Image1",
      className:
        "absolute bottom-[25%] md:bottom-[30%] left-[5%] md:left-[55%] scale-150 md:scale-125 z-50 opacity-1",
    },
    {
      src: "/img1.svg",
      alt: "Image1",
      className:
        "absolute bottom-[25%] md:bottom-[45%] left-[5%] md:left-[0%] scale-150 md:scale-125 z-50 opacity-1",
    },
    {
      src: "/img1.svg",
      alt: "Image1",
      className:
        "absolute bottom-[25%] md:bottom-[5%] left-[15%] md:left-[10%] scale-150 md:scale-125 z-50 opacity-1",
    },
    {
      src: "/img1.svg",
      alt: "Image3",
      className:
        "absolute bottom-[10%] md:bottom-[15%] left-[25%] md:left-[35%] scale-50 md:scale-75 z-5 opacity-40",
    },
    {
      src: "/img2.svg",
      alt: "Image2",
      className:
        "absolute bottom-[15%] md:bottom-[20%] left-[25%] md:left-[35%] scale-75 md:scale-95 z-10 opacity-60",
    },
    {
      src: "/img2.svg",
      alt: "Image2",
      className:
        "absolute bottom-[15%] md:bottom-[20%] left-[25%] md:left-[55%] scale-75 md:scale-95 z-10 opacity-60",
    },
  ];
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 bg-gradient-to-b from-red-500/80 via-red-600/50 to-red-700/80 overflow-hidden">
      <div className="relative h-full md:h-auto min-h-[33vh] md:min-h-full">
        <div className="relative h-full">
          {leftSideText.map((item) => (
            <BorderText text={item.text} className={item.position} />
          ))}
        </div>
      </div>
      <div className="relative h-full md:h-auto min-h-[34vh] md:min-h-full flex items-center justify-center">
        <motion.img
          src="/hand.svg"
          alt="Hand"
          className="scale-75 md:scale-125 w-max absolute top-[15%] md:top-[20%] m-auto z-20"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 1,
          }}
        />
        <motion.img
          src="/white_st_logo.webp"
          alt="logo"
          className="absolute inset-0 m-auto h-12 md:h-16 -bottom-48 md:bottom-5 w-max scale-125 md:scale-150 z-50"
          initial={{ opacity: 0.2, filter: "blur(2px)", scale: 0.5 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {middleImages.map((image, idx) => (
          <motion.img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className={image.className}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 4 + idx * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      <div className="relative h-full md:h-auto min-h-[33vh] md:min-h-full">
        {rightSideText.map((item) => (
          <BorderText text={item.text} className={item.position} />
        ))}
      </div>
    </div>
  );
};

export default HeroPage;
