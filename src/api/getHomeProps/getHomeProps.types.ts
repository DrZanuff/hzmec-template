export interface Response {
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

// ####### PRODUTOS ##########

export interface Produto extends Response {
  fields: {
    prazo?: number
    juros?: number
    parcelamento?: string
    categoria: string[]
    imagem: Image[]
    nome: string
    SEO: string
    ativo: boolean
    obs?: string
    slug: string
    valor: number
    parcela?: string
    slugCategoria: string[]
  }
}

export interface GetProdutosProps {
  records: Produto[]
}

// ####### IMAGES ##########
interface ImageData {
  url: string
  width: number
  height: number
}
export interface Image extends ImageData {
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

export interface GetPostsProps {
  records: Post[]
}

// ####### BANNERS ##########

export interface Banner extends Response {
  fields: {
    nome: string
    titulo: string
    imagem: Image[]
    texto: string
    url: string
    ativo: boolean
  }
}

export interface GetBannersProps {
  records: Banner[]
}
