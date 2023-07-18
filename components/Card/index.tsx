"use client"
import Image from "next/image";
import Link from "next/link"
import { FC } from "react"
import styles from './Card.module.scss'
import { motion } from "framer-motion";

const APP_API = process.env.APP_API

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

interface ICard {
  big?: boolean;
  circle?: boolean;
  bigHeight?: boolean;
  data: any;
}

const Card: FC<ICard> = ({
  big = false,
  circle = false,
  bigHeight = false,
  data
}) => {
  return (
    <motion.div variants={images}>
      <Link href={`/project/${data.slug}`} className={`${styles.card} ${big ? styles.big : ""} ${circle ? styles.circle : ""} ${bigHeight ? styles.bigHeight : ""}`}>
        <div className={styles.cardContent}>
          <h2>{data.title}</h2>
        </div>
        <Image src={APP_API+data.images.data[0].attributes.url+"?format=webp&resize=460x460"} fill alt="" />
        {/* <Image src={APP_API+data.images.data[0].attributes.url} fill alt="" /> */}
      </Link>
    </motion.div>
  )
}

export default Card