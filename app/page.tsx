import Container from '@/components/Container'
import styles from './page.module.scss'
import Card from '@/components/Card'
import projectsQuery from '@/queries/projects'
import { client } from '@/lib/api'
import { Metadata } from 'next'
import { getHomepageMeta } from '@/queries/homepage'
import { PageWrapper } from './page-wrapper'
import { Grid } from './Grid'

export const revalidate = 0
export const dynamic = 'force-dynamic'

async function getData() {
  const { data } = await client.query({
    query: projectsQuery,
  });

  const projects = data.projects.data.map((item: any) => item.attributes);
 
  return projects
}

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
 
  const { data } = await client.query({
    query: getHomepageMeta
  });

  const meta = data.homepage.data?.attributes.meta
 
  return {
    title: meta?.title + " | Enev–Juráň Architekti" || "",
    description: meta?.description || "",
    alternates: {
      canonical: `https://enev-juran.com`,
    },
  }
}

const Homepage = async () => {
  const projects = await getData()

  return (
    <PageWrapper>
      <main className={styles.main}>
        <Container>
          <Grid>
            {projects.map((item: any, idx: number) => {
              if(idx === 3 || idx === 5 || idx === 6 || idx === 8 || idx === 10 || idx === 14 || 
                idx === 17 || idx === 19 || idx === 20 || idx === 22 || idx === 24 || idx === 28) {
                return <>
                  {idx !== 5 && idx !== 19 && <div key={idx+"-empty"} className={styles.empty}></div>}
                  <div key={idx}>
                    <Card 
                      data={item} 
                      circle={idx === 3 || idx === 5 || idx === 10 || idx === 17 || idx === 19 || idx === 24} 
                      big={idx === 8 || idx === 22}
                    />
                  </div>
                  {(idx === 5 || idx === 19) && <div key={idx+"-empty"} className={styles.empty}></div>}
                </>
              }
              return <div key={idx}>
                <Card 
                  data={item} 
                  circle={idx === 1 || idx === 12 || idx === 15 || idx === 26} 
                  big={idx === 2 || idx === 9 || idx === 13 || idx === 16 || idx === 23 || idx === 27}
                  bigHeight={idx === 4 || idx === 18}
                />
              </div>
            })}
          </Grid>
        </Container>
      </main>
    </PageWrapper>
  )
}

export default Homepage
