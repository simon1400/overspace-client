"use client"
import Lottie from "lottie-react";
import logoAnimation from "@/public/logo.json";
import styles from './Logo.module.scss'

const Logo =  () => {
  return (
    <a href="/" className={styles.logo}>
      <Lottie loop={false} animationData={logoAnimation} />
    </a>
  )
}

export default Logo