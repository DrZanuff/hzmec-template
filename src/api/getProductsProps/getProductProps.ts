import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type { GetProdutosProps } from '../getHomeProps/getHomeProps.types'

export async function getProductsByCategories(category: string) {
  const productsByCategoriesRoute =
    TABLE_ID_LIST.PRODUTOS +
    '?filterByFormula=' +
    encodeURI(`AND(ativo=TRUE(),slugCategoria="${category}")`)

  const { data: responseProductsByCategories } =
    await api.get<GetProdutosProps>(productsByCategoriesRoute)
  return responseProductsByCategories.records
}

export async function getProducts() {
  const productsRoute =
    TABLE_ID_LIST.PRODUTOS + '?filterByFormula=' + encodeURI(`ativo=TRUE()`)

  const { data: responseProducts } = await api.get<GetProdutosProps>(
    productsRoute
  )
  return responseProducts.records
}

export async function getProductBySlug(slug: string) {
  const productBySlugRoute =
    TABLE_ID_LIST.PRODUTOS +
    '?filterByFormula=' +
    encodeURI(`AND(ativo=TRUE(),slug="${slug}")`)

  const { data: responseProductsBySlug } = await api.get<GetProdutosProps>(
    productBySlugRoute
  )

  return responseProductsBySlug.records
}

export async function getProductProps() {
  const produtos = await getProducts()

  return {
    produtos,
  }
}
