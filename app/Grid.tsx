"use client";

import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
import styles from './page.module.scss'

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Grid: FC<{children: ReactElement[]}> = ({ children }) => (
  <motion.div 
    variants={variants}
    initial="hidden"
    animate="show"
    className={styles.grid}
  >
    {children}
  </motion.div>
);