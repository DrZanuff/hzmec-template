import { getPagesProps } from '../../src/api/getPagesProps'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { PageData } from '../../pageTypes/pages.types'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  console.log('PROPS PARAMS', props)

  return (
    <div>
      <h1>Categorie {props.categorie}</h1>
      <h2>Page {props.page}</h2>
    </div>
  )
}

export default Page

export async function getStaticPaths() {
  let props: PageData = {
    categorias: [],
    produtos: [],
    posts: [],
    projetos: [],
  }

  try {
    const { categorias, posts, projetos, produtos } = await getPagesProps()

    props.categorias = categorias
    props.produtos = produtos
    props.posts = posts
    props.projetos = projetos
  } catch (e) {
    console.log(e)
  }

  return {
    paths: [
      { params: { categorie: 'som', page: 'alto' } },
      { params: { categorie: 'bolsas', page: 'de-ar' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  context.params
  return {
    // Passed to the page component as props
    props: {
      categorie: context.params?.categorie,
      page: context.params?.page,
    },
  }
}
