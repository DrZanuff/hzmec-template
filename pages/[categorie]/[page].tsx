import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

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
