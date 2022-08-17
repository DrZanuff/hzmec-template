import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import { GetCategoriaProps, GetPosts } from './'

async function getCategorias() {
  const categoryRoute = TABLE_ID_LIST.CATEGORIAS
  const { data: responseCategorias } = await api.get<GetCategoriaProps>(
    categoryRoute
  )
  return responseCategorias.records
}

async function getPosts() {
  const highlightedPostsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(destaque=TRUE(),tags!="Projeto")&maxRecords=6')

  const { data: hilightedPosts } = await api.get<GetPosts>(
    highlightedPostsRoute
  )

  const postsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(destaque!=TRUE(),tags!="Projeto")')

  const { data: posts } = await api.get<GetPosts>(postsRoute)

  return [...hilightedPosts.records, ...posts.records].slice(0, 6)
}

async function getProjects() {
  const highlightedProjectsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(destaque=TRUE(),tags="Projeto")&maxRecords=6')

  const { data: hilightedProjects } = await api.get<GetPosts>(
    highlightedProjectsRoute
  )

  const projectsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI('AND(destaque!=TRUE(),tags="Projeto")&maxRecords=6')

  const { data: projects } = await api.get<GetPosts>(projectsRoute)

  return [...hilightedProjects.records, ...projects.records].slice(0, 6)
}

export async function getHomeProps() {
  const categorias = await getCategorias()
  const posts = await getPosts()
  const projetos = await getProjects()

  return {
    categorias,
    posts,
    projetos,
  }
}
