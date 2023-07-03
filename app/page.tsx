import Container from '@/components/Container'
import styles from './page.module.scss'
import Card from '@/components/Card'

const Homepage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.grid}>
          <div><Card /></div>
          <div><Card circle /></div>
          <div><Card big /></div>
          <div></div>
          <div><Card circle /></div>
          <div><Card bigHeight/></div>
          <div><Card circle/></div>
          <div></div>
          <div></div>
          <div><Card /></div>
          <div><Card /></div>
          <div></div>
          <div><Card big/></div>
          <div><Card big/></div>
          <div></div>
          <div><Card circle/></div>
          <div><Card /></div>
          <div><Card circle/></div>
          <div><Card big/></div>
        </div>
      </Container>
    </main>
  )
}

export default Homepage
