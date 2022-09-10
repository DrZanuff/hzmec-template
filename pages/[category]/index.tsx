import { useMemo } from 'react'
import { getCategoryProps } from '../../src/api/getCategoryProps'
import { getCategoryName } from '../../src/api/getCategoryProps/getCategoryProps'
import { getProductsByCategories } from '../../src/api/getProductsProps/getProductProps'
import Link from 'next/link'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type {
  CategoryPaths,
  CategoryData,
} from '../../pageTypes/category.types'
import type { Produto } from '../../src/api/getHomeProps'

const Category: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  console.log('PROPS PARAMS', props)

  const category = useMemo(() => {
    return props as CategoryData
  }, [props])

  return (
    <div>
      <h1>Categoria {category.categoryName} YO</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {category.products.map((product, index) => (
          <Link
            key={index}
            href={`/${category.categorySlug}/${product.fields.slug}`}
          >
            <span>
              {product.fields.nome}
              <button>
                {category.categorySlug}/{product.fields.slug}
              </button>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category

export async function getStaticPaths() {
  let props: CategoryPaths = {
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
    const produtos = await getProductsByCategories(
      String(context.params?.category)
    )
    productList = produtos

    const category = await getCategoryName(String(context.params?.category))
    categoryName = category.fields.nome
  } catch (e) {
    console.log(e)
  }

  return {
    // Passed to the page component as props
    props: {
      categoryName: categoryName,
      categorySlug: String(context.params?.category),
      products: productList,
    } as CategoryData,
    revalidate: 60 * 30, // 30 minutos
  }
}
