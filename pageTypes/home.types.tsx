import type { InstaGramPost } from '../src/api/instaFeed/instaFeed.types'
import type { Banner, Categoria, Post } from '../src/api/getHomeProps'

export interface HomeData {
  categorias: Categoria[]
  posts: Post[]
  projetos: Post[]
  instafeed: InstaGramPost[]
  banners: Banner[]
}
