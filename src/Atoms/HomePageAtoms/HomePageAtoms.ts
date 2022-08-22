import type { Categoria } from '../../api/getHomeProps/getHomeProps.types'
import { atom } from 'recoil'

export const categoriaContext = atom({
  key: 'categoriaContext',
  default: [] as Categoria[],
})
