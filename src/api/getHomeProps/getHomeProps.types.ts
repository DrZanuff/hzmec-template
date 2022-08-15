export interface Categoria {
  id: string
  createdTime: string
  fields: {
    Produtos: string[]
    ativo: boolean
    menu: boolean
    ID: string
    SEO: string
    filtro: string[]
    nome: string
  }
}

export interface GetCategoriaProps {
  records: Categoria[]
}
