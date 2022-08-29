import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type { GetProdutosProps } from '../getHomeProps/getHomeProps.types'

async function getProdutos(category: string) {
  const produtosRoute =
    TABLE_ID_LIST.PRODUTOS +
    '?filterByFormula=' +
    encodeURI(`AND(ativo=TRUE(),slugCategoria="${category}")`)

  const { data: responseProdustos } = await api.get<GetProdutosProps>(
    produtosRoute
  )
  return responseProdustos.records
}

export async function getProductProps(category: string) {
  const produtos = await getProdutos(category)

  return {
    produtos,
  }
}
