interface Response {
  id: string
  createdTime: string
}

// ####### CATEGORIAS ##########
export interface Categoria extends Response {
  fields: {
    Produtos: string[]
    ativo: boolean
    menu: boolean
    slug: string
    SEO: string
    filtro: string[]
    nome: string
  }
}

export interface GetCategoriaProps {
  records: Categoria[]
}

// ####### IMAGES ##########
interface ImageData {
  url: string
  width: number
  height: number
}
interface Image extends ImageData {
  id: string
  filename: string
  size: number
  type: string
  thumbnails: {
    small: ImageData
    large: ImageData
    full: ImageData
  }
}

// ####### POSTS ##########
export interface Post extends Response {
  fields: {
    imagem: Image[]
    tags: string[]
    data: string
    titulo: string
    slug: string
    ativo: boolean
    texto: string
    destaque: boolean
  }
}

export interface GetPosts {
  records: Post[]
}
