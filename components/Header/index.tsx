"use client"
import { FC, useState } from "react"
import Container from "../Container"
import Logo from "../Logo"
import styles from './Header.module.scss'
import { Squash as Hamburger } from 'hamburger-react'
import Image from "next/image"
import Link from "next/link"

const Header: FC<{data: any}> = ({data}) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <header className={styles.header}>
        <Logo />
        <Image src="/textlogo.svg" width="360" height="33" alt="Text logo" />
        <div className={styles.hamburger}>
          <Hamburger color={isOpen ? "#fff" : "#000"} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
          <Container>
            <nav>
              <ul>
                {data.map((item: any, idx: number) => <li key={idx}><Link href={item.link}>{item.title}</Link></li>)}
              </ul>
            </nav>
          </Container>
        </div>
        <div className={styles.respName}>
          <Image src="/textlogo.svg" width="360" height="33" alt="Text logo" />
        </div>
      </header>
    </Container>
  )
}

export default Header