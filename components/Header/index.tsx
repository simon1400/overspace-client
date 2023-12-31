"use client"
import { FC, useState } from "react"
import Container from "../Container"
import Logo from "../Logo"
import styles from './Header.module.scss'
import { Squash as Hamburger } from 'hamburger-react'
import FBIcon from '/public/fb.svg'
import InstaIcon from '/public/insta.svg'
import TextLogo from '/public/enev-juran-logo.svg'
import Link from "next/link"

const Header: FC<{topNav: any; soc: any}> = ({topNav, soc}) => {

  const [isOpen, setOpen] = useState(false)

  const handleClick = (e: any, slug: string) => {
    e.preventDefault()
    window.location.href = slug
    setOpen(false)
  }

  return (
    <Container>
      <header className={styles.header}>
        <Logo />
        <Link className={styles.textLogo} href="/"><TextLogo /></Link>
        <div className={styles.hamburger}>
          <Hamburger color={isOpen ? "#fff" : "#000"} size={44} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
          <Container>
            <nav>
              <ul>
                {topNav.map((item: any, idx: number) => <li key={idx}><a href={item.link} onClick={e => handleClick(e, item.link)}>{item.title}</a></li>)}
                {!!soc.length && <li>
                  <ul>
                    {soc.map((item: any, idx: number) => <li key={idx}>
                      <a href={item.link}>
                        {item.icon === "instagram" && <InstaIcon />}
                        {item.icon === "facebook" && <FBIcon />}
                      </a>
                    </li>)}
                  </ul>
                </li>}
              </ul>
            </nav>
          </Container>
        </div>
        <div className={styles.respName}>
          <Link href="/"><TextLogo /></Link>
        </div>
      </header>
    </Container>
  )
}

export default Header