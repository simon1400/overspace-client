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
  title: 'Úvod | Enev–Juráň Architekti',
  description: 'Úvod',
}

const Homepage = async () => {
  const projects = await getData()
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.grid}>
          {projects.splice(0, 14).map((item: any, idx: number) => {
            if(idx === 3 || idx === 5 || idx === 6 || idx === 8 || idx === 10 || idx === 14) {
              return <>
                {idx !== 5 && <div key={idx+"-empty"}></div>}
                <div key={idx}>
                  <Card 
                    data={item} 
                    circle={idx === 3 || idx === 5 || idx === 10} 
                    big={idx === 8}
                  />
                </div>
                {idx === 5 && <div key={idx+"-empty"}></div>}
              </>
            }
            return <div key={idx}>
              <Card 
                data={item} 
                circle={idx === 1 || idx === 5 || idx === 13} 
                big={idx === 2 || idx === 9 || idx === 14}
                bigHeight={idx === 4}
              />
            </div>
          })}
        </div>
      </Container>
    </main>
  )
}

export default Homepage
