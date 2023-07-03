"use client"
import { useState } from "react"
import Container from "../Container"
import Logo from "../Logo"
import styles from './Header.module.scss'
import { Squash as Hamburger } from 'hamburger-react'
import Image from "next/image"

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <header className={styles.header}>
        <Logo />
        <Image src="/textlogo.svg" width="360" height="33" alt="Text logo" />
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <div className={styles.respName}>
          <Image src="/textlogo.svg" width="360" height="33" alt="Text logo" />
        </div>
      </header>
    </Container>
  )
}

export default Header