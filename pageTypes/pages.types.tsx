import type { InstagramPost } from '../src/api/instaFeed/instaFeed.types'
import type { Produto, Categoria, Post } from '../src/api/getHomeProps'

export interface PageData {
  categorias: Categoria[]
  produtos: Produto[]
  posts: Post[]
  projetos: Post[]
}
