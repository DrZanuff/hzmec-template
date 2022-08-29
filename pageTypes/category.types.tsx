import type { Produto, Categoria } from '../src/api/getHomeProps'

export interface CategoryData {
  categorias: Categoria[]
}

export interface ProductListData {
  category: string
  products: Produto[]
}
