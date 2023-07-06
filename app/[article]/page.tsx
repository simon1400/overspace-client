import Container from "@/components/Container"
import { client } from "@/lib/api";
import { getArticle, getArticleMeta } from "@/queries/article";
import { Metadata, NextPage } from "next";

async function getData(slug: string) {
  const { data } = await client.query({
    query: getArticle,
    variables: {
      slug
    }
  });

  const article = data.articles.data[0]?.attributes;
 
  return article
}

type Props = {
  params: { article: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
 
  const { data } = await client.query({
    query: getArticleMeta,
    variables: {
      slug: params.article
    }
  });

  const meta = data.articles.data[0].attributes.meta
 
  return {
    title: meta.title + " | Enev–Juráň Architekti",
    description: meta.description,
    alternates: {
      canonical: `https://overspace.cz/${params.article}`,
    },
  }
}

const Article: NextPage<{params: {article: string}}> = async ({params: {article}}) => {

  const data = await getData(article)

  return (
    <main>
      <Container>
        <div className="content">
          <div>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.content}}/>
          </div>
          <div></div>
        </div>
      </Container>
    </main>
  )
}

export default Article