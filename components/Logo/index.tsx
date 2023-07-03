"use client"
import Lottie from "lottie-react";
import logoAnimation from "@/public/logo.json";
import styles from './Logo.module.scss'
import Link from "next/link";

const Logo =  () => {
  return (
    <Link href="/" className={styles.logo}>
      <Lottie animationData={logoAnimation} />
    </Link>
  )
}

export default Logo