"use client";
import styles from './page-wrapper.module.scss'
import { motion, AnimatePresence } from "framer-motion";
import { FC, ReactElement } from "react";

export const PageWrapper: FC<{children: ReactElement}> = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
        className={styles.wrap}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);