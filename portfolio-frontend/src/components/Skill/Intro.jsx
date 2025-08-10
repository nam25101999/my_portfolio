import { useEffect } from "react";
import { motion } from "framer-motion";

const mainText = "NBHN The Dev";
const subText = "Welcome to my portfolio";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 5 giây

    return () => clearTimeout(timer);
  }, [onFinish]);

  // Variant cho từng chữ "rơi xuống"
  const letterVariants = {
    initial: { y: '-100vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '500' }} // Kéo xuống dưới và mờ dần khi unmount
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-[9999]"
    >
      <motion.h1
        className="flex space-x-4 text-white text-7xl font-extrabold uppercase tracking-widest select-none relative"
        aria-label={mainText}
      >
        {/* Hiệu ứng rơi từng chữ */}
        {mainText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.12, type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: char === " " ? "inline-block" : undefined }}
          >
            {char}
          </motion.span>
        ))}

        {/* Gạch ngang màu gradient bên dưới */}
        <motion.div
          layoutId="underline"
          className="absolute top-[80px] left-[80px] mx-auto h-1 w-3/4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded"
          style={{ marginTop: "0.5rem" }}
        />
      </motion.h1>

      {/* Dòng chữ nhỏ phía dưới */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: mainText.length * 0.12 + 0.5, duration: 0.8 }}
        className="mt-6 text-pink-400 text-xl tracking-wide select-none"
      >
        {subText}
      </motion.p>
    </motion.div>
  );
}
