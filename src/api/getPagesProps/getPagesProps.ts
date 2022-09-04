import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type {
  GetCategoriaProps,
  GetPostsProps,
  GetProdutosProps,
} from '../getHomeProps/getHomeProps.types'

async function getCategorias() {
  const categoriasRoute =
    TABLE_ID_LIST.CATEGORIAS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseCategorias } = await api.get<GetCategoriaProps>(
    categoriasRoute
  )
  return responseCategorias.records
}

async function getProdutos() {
  const produtosRoute =
    TABLE_ID_LIST.PRODUTOS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseProdustos } = await api.get<GetProdutosProps>(
    produtosRoute
  )
  return responseProdustos.records
}

async function getPosts() {
  const postsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(ativo=TRUE(),tags!="Projeto")')

  const { data: posts } = await api.get<GetPostsProps>(postsRoute)

  return posts.records
}

async function getProjects() {
  const projectsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(ativo=TRUE(),tags="Projeto")')

  const { data: projects } = await api.get<GetPostsProps>(projectsRoute)

  return projects.records
}

export async function getPagesProps() {
  const categorias = await getCategorias()
  const produtos = await getProdutos()
  const posts = await getPosts()
  const projetos = await getProjects()

  return {
    categorias,
    produtos,
    posts,
    projetos,
  }
}
