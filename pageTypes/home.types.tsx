import type { Categoria, Post } from '../src/api/getHomeProps'
import type { InstaGramPost } from '../src/api/instaFeed/instaFeed.types'

export interface HomeData {
  categorias: Categoria[]
  posts: Post[]
  projetos: Post[]
  instafeed: InstaGramPost[]
}
