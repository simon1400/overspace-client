"use client"
import Image from "next/image";
import Link from "next/link"
import { FC } from "react"
import styles from './Card.module.scss'

const APP_API = process.env.APP_API

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
    <Link href={`/project/${data.slug}`} className={`${styles.card} ${big ? styles.big : ""} ${circle ? styles.circle : ""} ${bigHeight ? styles.bigHeight : ""}`}>
      <div className={styles.cardContent}>
        <h2>{data.title}</h2>
      </div>
      {/* <Image src={APP_API+data.images.data[0].attributes.url+"?format=webp&resize=460x460"} fill alt="" /> */}
      <Image src={APP_API+data.images.data[0].attributes.url} fill alt="" />
    </Link>
  )
}

export default Card