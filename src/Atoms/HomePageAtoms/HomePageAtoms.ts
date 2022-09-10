import type {
  Categoria,
  Banner,
  Post,
} from '../../api/getHomeProps/getHomeProps.types'
import type { InstagramPost } from '../../api/instaFeed/instaFeed.types'
import { atom } from 'recoil'

export const categoriaContext = atom({
  key: 'categoriaContext',
  default: [] as Categoria[],
})

export const bannerContext = atom({
  key: 'bannerContext',
  default: [] as Banner[],
})

export const postContext = atom({ key: 'postContext', default: [] as Post[] })

export const projetoContext = atom({
  key: 'projetoContext',
  default: [] as Post[],
})

export const instagramPostContext = atom({
  key: 'instagramPostContext',
  default: [] as InstagramPost[],
})
