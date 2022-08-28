import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type {
  GetCategoriaProps,
  GetPostsProps,
  GetProdutosProps,
} from '../getHomeProps/getHomeProps.types'

async function getCategorias() {
  const categoriasRoute =
    TABLE_ID_LIST.CATEGORIAS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseCategorias } = await api.get<GetCategoriaProps>(
    categoriasRoute
  )
  return responseCategorias.records
}

async function getProdutos() {
  const produtosRoute =
    TABLE_ID_LIST.PRODUTOS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseProdustos } = await api.get<GetProdutosProps>(
    produtosRoute
  )
  return responseProdustos.records
}

export async function getCategoryProps() {
  const categorias = await getCategorias()
  const produtos = await getProdutos()

  return {
    categorias,
    produtos,
  }
}
