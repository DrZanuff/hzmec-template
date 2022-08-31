import { getProductProps } from '../../src/api/getProductsProps'
import { getProductBySlug } from '../../src/api/getProductsProps/getProductProps'
import { getPagesProps } from '../../src/api/getPagesProps'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ProductData } from '../../pageTypes/product.type'
import type { Produto } from '../../src/api/getHomeProps/getHomeProps.types'
import type { ProductPath } from '../../src/api/getProductsProps/getProductProps.types'
import { getCategoryName } from '../../src/api/getCategoryProps/getCategoryProps'

const Product: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const data = props as ProductData
  console.log('PROPS PARAMS', props)

  return (
    <div>
      <h1>Category {data.categoryName}</h1>
      <h2>Page {data.product?.fields?.nome}</h2>
    </div>
  )
}

export default Product

export async function getStaticPaths() {
  let props = {
    products: [] as Produto[],
  }

  try {
    const { produtos } = await getProductProps()
    props.products = produtos
  } catch (e) {
    console.log(e)
  }

  const productsByCategories = new Map<string, Produto[]>()

  props.products.forEach((product) => {
    product.fields.slugCategoria.forEach((category) => {
      if (productsByCategories.has(category)) {
        const currentProductList = productsByCategories.get(
          category
        ) as Produto[]

        productsByCategories.set(category, [...currentProductList, product])
      } else {
        productsByCategories.set(category, [product])
      }
    })
  })

  let paths = [] as ProductPath[]
  productsByCategories.forEach((products, category) => {
    products.forEach((product) => {
      paths = [
        ...paths,
        {
          params: {
            category,
            product: product.fields.slug,
          },
        },
      ]
    })
  })

  return {
    paths,
    // paths: [
    //   { params: { category: 'som', product: 'alto' } },
    //   { params: { category: 'bolsas', product: 'de-ar' } },
    // ],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  context.params
  let produto = [] as Produto[]
  let categoryName = ''

  try {
    const product = await getProductBySlug(String(context.params?.product))
    produto.push(product[0])

    const category = await getCategoryName(String(context.params?.category))
    categoryName = category.fields.nome
  } catch (e) {
    console.log(e)
  }

  return {
    // Passed to the page component as props
    props: {
      category: context.params?.category,
      categoryName,
      product: produto[0],
    },
  }
}
