import {
  getPostBySlug,
  getPosts,
} from '../../src/api/getPostsProps/getPostsProps'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type { Post } from '../../src/api/getHomeProps/getHomeProps.types'
import type { PostPath } from '../../src/api/getPostsProps/getPostsProps.types'

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const data = props.post as Post

  console.log('DBG::', data)

  return (
    <div>
      <h1>{data.fields?.titulo}</h1>
      <p>{data.fields?.texto}</p>
      <h6>Página de posts</h6>
    </div>
  )
}

export async function getStaticPaths() {
  let props = {
    posts: [] as Post[],
  }

  try {
    const posts = await getPosts()
    props.posts = posts
  } catch (e) {
    console.log(e)
  }

  let paths: PostPath[] = props.posts.map((post) => {
    return {
      params: {
        post: post.fields.slug,
      },
    }
  })

  return {
    paths,
    // paths: [
    //   { params: { post: 'alto' } },
    //   { params: { post: 'de-ar' } },
    // ],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  context.params
  let post = [] as Post[]

  try {
    const posts = await getPostBySlug(String(context.params?.post))
    post.push(posts[0])
  } catch (e) {
    console.log(e)
  }

  console.log('DBG::', post)

  return {
    // Passed to the page component as props
    props: {
      post: post[0],
    },
    revalidate: 60 * 30, // 30 minutos
  }
}

export default Post
