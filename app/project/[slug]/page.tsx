import Container from '@/components/Container'
import styles from './project.module.scss'
import Slider from '@/components/Slider'
import { client } from '@/lib/api';
import { getProject, getProjectMeta } from '@/queries/projects';
import { Metadata, NextPage, ResolvingMetadata } from 'next';

async function getData(slug: string) {
  const { data } = await client.query({
    query: getProject,
    variables: {
      slug
    }
  });

  const project = data.projects.data[0].attributes;
 
  return project
}

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
 
  const { data } = await client.query({
    query: getProjectMeta,
    variables: {
      slug: params.slug
    }
  });

  const meta = data.projects.data[0].attributes.meta
 
  return {
    title: meta.title + " | Overspace",
    description: meta.description,
  }
}

const Project: NextPage<{params: {slug: string}}> = async ({params: {slug}}) => {

  const project = await getData(slug)

  return (
    <main className={styles.main}>
      <Container>
        <Slider data={project.images.data} />
        <div className="content">
          <div>
            <h1>{project.title}</h1>
            <div dangerouslySetInnerHTML={{__html: project.content}}/>
          </div>
          <div></div>
        </div>
      </Container>
    </main>
  )
}

export default Project
