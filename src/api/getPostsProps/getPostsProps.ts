import { api } from '..'
import { TABLE_ID_LIST } from '../tableID'
import type { GetPostsProps } from '../getHomeProps/getHomeProps.types'

export async function getPosts() {
  const postsRoute =
    TABLE_ID_LIST.POSTS + '?filterByFormula=' + encodeURI(`ativo=TRUE()`)

  const { data: responsePosts } = await api.get<GetPostsProps>(postsRoute)
  return responsePosts.records
}

export async function getPostBySlug(slug: string) {
  const postBySlugRoute =
    TABLE_ID_LIST.POSTS +
    '?filterByFormula=' +
    encodeURI(`AND(ativo=TRUE(),slug="${slug}")`)

  const { data: responsePostsBySlug } = await api.get<GetPostsProps>(
    postBySlugRoute
  )

  return responsePostsBySlug.records
}

export async function getPostProps() {
  const posts = await getPosts()

  return {
    posts,
  }
}
