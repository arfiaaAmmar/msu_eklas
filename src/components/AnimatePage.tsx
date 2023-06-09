import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
}

const AnimatePage = ({ children }: Props) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default AnimatePage;
