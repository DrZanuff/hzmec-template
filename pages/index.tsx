import { getHomeProps } from '../src/api/getHomeProps'
import { HomeComponent } from '../src/pagesContainers/HomeComponent'
import type { HomeData } from '../pageTypes/home.types'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const data = props as HomeData
  return <HomeComponent {...data} />
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  let props: HomeData = {
    categorias: [],
    posts: [],
    projetos: [],
    banners: [],
  }

  try {
    const { categorias, posts, projetos, banners } = await getHomeProps()

    props.categorias = categorias
    props.posts = posts
    props.projetos = projetos
    props.banners = banners
  } catch (e) {
    console.log(e)
  }

  return {
    props,
  }
}
