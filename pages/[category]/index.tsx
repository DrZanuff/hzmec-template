import { useMemo } from 'react'
import { getCategoryProps } from '../../src/api/getCategoryProps'
import { getCategoryName } from '../../src/api/getCategoryProps/getCategoryProps'
import { getProductProps } from '../../src/api/getProductsProps '
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type {
  CategoryData,
  ProductListData,
} from '../../pageTypes/category.types'
import { Produto } from '../../src/api/getHomeProps'

const Category: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  console.log('PROPS PARAMS', props)

  const productList = useMemo(() => {
    return props as ProductListData
  }, [props])

  return (
    <div>
      <h1>Categoria {productList.category}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {productList.products.map((produto, index) => (
          <span key={index}>{produto.fields.nome}</span>
        ))}
      </div>
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
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let categoryName = ''
  let productList: Produto[] = []

  try {
    const { produtos } = await getProductProps(String(context.params?.category))
    productList = produtos

    const category = await getCategoryName(String(context.params?.category))
    categoryName = category.fields.nome
  } catch (e) {
    console.log(e)
  }

  return {
    // Passed to the page component as props
    props: {
      category: categoryName,
      products: productList,
    },
  }
}
