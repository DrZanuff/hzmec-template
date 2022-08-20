import { Categoria } from '../../../api/getHomeProps/getHomeProps.types'

interface GeneratedCategories {
  name: string
  url: string
  isButton: boolean
  isActive: boolean
}

export function generateCategories(
  categories: Categoria[],
  currentPath: string
) {
  const generatedCategories: Array<GeneratedCategories> = [
    {
      name: 'Home',
      url: '/',
      isButton: false,
      isActive: currentPath === '/',
    },
  ]

  categories.forEach((categorie, index) => {
    if (index === categories.length - 1) {
      generatedCategories.push({
        name: 'Socorro',
        url: '/',
        isButton: true,
        isActive: currentPath === '/sos',
      })
    }

    if (categorie.fields.ativo && categorie.fields.menu) {
      generatedCategories.push({
        name: categorie.fields.nome,
        url: categorie.fields.slug,
        isButton: false,
        isActive: currentPath === categorie.fields.slug,
      })
    }
  })

  return generatedCategories
}
