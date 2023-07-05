import Container from '@/components/Container'
import styles from './page.module.scss'
import Card from '@/components/Card'
import projectsQuery from '@/queries/projects'
import { client } from '@/lib/api'

async function getData() {
  const { data } = await client.query({
    query: projectsQuery,
  });

  const projects = data.projects.data.map((item: any) => item.attributes);
 
  return projects
}


export const metadata = {
  title: 'Úvod | Overspace',
  description: 'Úvod',
}

const Homepage = async () => {
  const projects = await getData()
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.grid}>
          {projects.splice(0, 14).map((item: any, idx: number) => {
            if(idx === 3 || idx === 7 || idx === 8 || idx === 11 || idx === 14) {
              return <div key={idx}></div>
            }
            return <div key={idx}>
              <Card 
                data={item} 
                circle={idx === 1 || idx === 4 || idx === 6 || idx === 15 || idx === 17} 
                big={idx === 2 || idx === 12 || idx === 13 || idx === 18}
                bigHeight={idx === 5}
              />
            </div>
          })}
          
          {/* <div><Card circle /></div>
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
          <div><Card big/></div> */}
        </div>
      </Container>
    </main>
  )
}

export default Homepage
