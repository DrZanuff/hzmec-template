import { getCategoryProps } from '../../src/api/getCategoryProps'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { CategoryData } from '../../pageTypes/category.types'

const Category: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  console.log('PROPS PARAMS', props)

  return (
    <div>
      <h1>Categorie {props.categorie}</h1>
    </div>
  )
}

export default Category

export async function getStaticPaths() {
  let props: CategoryData = {
    categorias: [],
  }

  try {
    const { categorias } = await getCategoryProps()

    props.categorias = categorias
  } catch (e) {
    console.log(e)
  }

  const paths = props.categorias.map((category) => category.fields.slug)

  return {
    paths: paths.map((path) => {
      return {
        params: { category: path },
      }
    }),
    // paths: [
    //   { params: { categorie: 'som' } },
    //   { params: { categorie: 'bolsas' } },
    // ],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  context.params
  return {
    // Passed to the page component as props
    props: {
      categorie: context.params?.category,
    },
  }
}
