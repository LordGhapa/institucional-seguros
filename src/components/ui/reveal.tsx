"use client";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -50 },
};

interface RevealProps {
  children: ReactNode;
}
export const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
