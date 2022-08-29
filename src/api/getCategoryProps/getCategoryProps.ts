import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type { GetCategoriaProps } from '../getHomeProps/getHomeProps.types'

async function getCategorias() {
  const categoriasRoute =
    TABLE_ID_LIST.CATEGORIAS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseCategorias } = await api.get<GetCategoriaProps>(
    categoriasRoute
  )
  return responseCategorias.records
}

export async function getCategoryName(slug: string) {
  const categoriaRoute =
    TABLE_ID_LIST.CATEGORIAS +
    '?filterByFormula=' +
    encodeURI(`AND(ativo=TRUE(),slug="${slug}")`)

  const { data: responseCategoria } = await api.get<GetCategoriaProps>(
    categoriaRoute
  )
  return responseCategoria.records[0]
}

export async function getCategoryProps() {
  const categorias = await getCategorias()

  return {
    categorias,
  }
}
