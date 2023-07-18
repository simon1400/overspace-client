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
            {projects.splice(14, 28).map((item: any, idx: number) => {
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
          </Grid>
        </Container>
      </main>
    </PageWrapper>
  )
}

export default Homepage
