import type { Produto, Categoria } from '../src/api/getHomeProps'

export interface CategoryPaths {
  categorias: Categoria[]
}

export interface CategoryData {
  categoryName: string
  categorySlug: string
  products: Produto[]
}
