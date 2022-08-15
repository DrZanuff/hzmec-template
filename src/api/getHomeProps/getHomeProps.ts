import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import { GetCategoriaProps } from './'

export async function getHomeProps() {
  const route = TABLE_ID_LIST.CATEGORIAS

  const { data: responseCategorias } = await api.get<GetCategoriaProps>(route)

  return {
    categorias: responseCategorias.records,
  }
}
