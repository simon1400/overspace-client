import Image from "next/image";
import Link from "next/link"
import { FC } from "react"
import styles from './Card.module.scss'

interface ICard {
  big?: boolean;
  circle?: boolean;
  bigHeight?: boolean;
}

const Card: FC<ICard> = ({
  big = false,
  circle = false,
  bigHeight = false,
}) => {
  return (
    <Link href="/project/asdsd" className={`${styles.card} ${big ? styles.big : ""} ${circle ? styles.circle : ""} ${bigHeight ? styles.bigHeight : ""}`}>
      <div className={styles.cardContent}>
        <h2>RD Trebic</h2>
      </div>
      <Image src="/card.png" fill alt="" />
    </Link>
  )
}

export default Card