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

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
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