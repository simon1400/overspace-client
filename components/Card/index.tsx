"use client"
import Image from "next/image";
import Link from "next/link"
import { FC } from "react"
import styles from './Card.module.scss'
import { motion } from "framer-motion";

const APP_API = process.env.APP_API

const projectAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
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
  let format = data.images.data[0].attributes.url.indexOf('.gif') >= 0 ? "?resize=460x460" : "?format=webp&resize=460x460"
  return (
    <motion.div variants={projectAnimation}>
      <Link href={`/project/${data.slug}`} className={`${styles.card} ${big ? styles.big : ""} ${circle ? styles.circle : ""} ${bigHeight ? styles.bigHeight : ""}`}>
        <div className={styles.cardContent}>
          <h2>{data.title}</h2>
        </div>
        <Image src={APP_API+data.images.data[0].attributes.url+format} fill alt="" />
      </Link>
    </motion.div>
  )
}

export default Card