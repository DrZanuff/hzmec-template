import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import { getInstagramData } from '../instaFeed'
import type {
  GetBannersProps,
  GetCategoriaProps,
  GetPostsProps,
} from './getHomeProps.types'

async function getBanners() {
  const bannersRoute =
    TABLE_ID_LIST.BANNERS + '?filterByFormula=' + encodeURI('ativo=TRUE()')

  const { data: responseBanners } = await api.get<GetBannersProps>(bannersRoute)
  return responseBanners.records
}

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
    encodeURI(
      'AND(destaque=TRUE(),SEARCH("Projeto",tags)=0,ativo=TRUE())&maxRecords=4'
    )

  const { data: hilightedPosts } = await api.get<GetPostsProps>(
    highlightedPostsRoute
  )

  const postsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI(
      'AND(destaque!=TRUE(),SEARCH("Projeto",tags)=0,ativo=TRUE())&maxRecords=4'
    )

  const { data: posts } = await api.get<GetPostsProps>(postsRoute)

  return [...hilightedPosts.records, ...posts.records].slice(0, 4)
}

async function getProjects() {
  const highlightedProjectsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI(
      'AND(destaque=TRUE(),SEARCH("Projeto",tags)>0,ativo=TRUE())&maxRecords=4'
    )

  const { data: hilightedProjects } = await api.get<GetPostsProps>(
    highlightedProjectsRoute
  )

  const projectsRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI(
      'AND(destaque!=TRUE(),SEARCH("Projeto",tags)>0,ativo=TRUE())&maxRecords=4'
    )

  const { data: projects } = await api.get<GetPostsProps>(projectsRoute)

  return [...hilightedProjects.records, ...projects.records].slice(0, 4)
}

export async function getHomeProps() {
  const categorias = await getCategorias()
  const posts = await getPosts()
  const projetos = await getProjects()
  const instafeed = await getInstagramData()
  const banners = await getBanners()

  return {
    categorias,
    posts,
    projetos,
    instafeed,
    banners,
  }
}
