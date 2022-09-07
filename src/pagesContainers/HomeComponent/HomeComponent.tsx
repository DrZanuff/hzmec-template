import { useEffect } from 'react'
import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import { Footer } from '../../components/Footer'
import { useSetRecoilState } from 'recoil'
import {
  categoriaContext,
  bannerContext,
  postContext,
  instagramPostContext,
  projetoContext,
} from '../../Atoms/HomePageAtoms'
import { MainBanner } from '../../components/MainBanner'
import { PostComponent } from '../../components/PostComponent'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'
import { Header } from '../../components/Header'
import { Instafeed } from '../../components/Instafeed'

export function HomeComponent({
  categorias,
  posts,
  projetos,
  instafeed,
  banners,
}: HomeComponentProps) {
  const setCategorias = useSetRecoilState(categoriaContext)
  const setBanners = useSetRecoilState(bannerContext)
  const setPost = useSetRecoilState(postContext)
  const setInstagramPost = useSetRecoilState(instagramPostContext)
  const setProjetos = useSetRecoilState(projetoContext)

  useEffect(() => {
    setCategorias(categorias)
    setBanners(banners)
    setPost(posts)
    setInstagramPost(instafeed)
    setProjetos(projetos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('categorias', categorias)
  console.log('posts', posts)
  console.log('projetos', projetos)
  console.log('instafeed', instafeed)
  console.log('banners', banners)

  return (
    <S.HomeComponentContainer>
      <Header />
      <MainBanner />
      <PageBlock gap={0} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" url="/" />
        <S.PostsContainer>
          {posts.map((post, index) => (
            <PostComponent
              key={index}
              image={post.fields.imagem?.[0]?.url}
              title={post.fields.titulo}
              text={post.fields.texto}
              url={`/posts/${post.fields.slug}`}
              compact
            />
          ))}
        </S.PostsContainer>
        <TitleBar title="NOSSO INSTAGRAM" subTItle="@HZMEC" />
        <Instafeed />
        <TitleBar title="PROJETOS CONCLUIDOS" url="/" />
        <S.PostsContainer>
          {projetos.map((projetos, index) => (
            <PostComponent
              key={index}
              image={projetos.fields.imagem?.[0]?.url}
              title={projetos.fields.titulo}
              text={projetos.fields.texto}
              url={`/posts/${projetos.fields.slug}`}
              compact
            />
          ))}
        </S.PostsContainer>
      </PageBlock>
      <Footer />
    </S.HomeComponentContainer>
  )
}
