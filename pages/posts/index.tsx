import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Post } from '../../src/api/getHomeProps'
import { getPosts } from '../../src/api/getPostsProps/getPostsProps'

const PostsList: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const data = props.posts as Post[]

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {data.map((post, index) => (
          <li key={index}>
            <Link href={`/posts/${post.fields.slug}`}>
              {post.fields.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let postList: Post[] = []

  try {
    const posts = await getPosts()
    postList = posts
  } catch (e) {
    console.log(e)
  }

  return {
    // Passed to the page component as props
    props: {
      posts: postList,
    },
    revalidate: 60 * 30, // 30 minutos
  }
}

export default PostsList
