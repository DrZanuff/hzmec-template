import type { Categoria, Post } from '../src/api/getHomeProps'

export interface HomeData {
  categorias: Categoria[]
  posts: Post[]
  projetos: Post[]
}
