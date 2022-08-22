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
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'
import { Header } from '../../components/Header'

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
      <PageBlock gap={30} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" />
        <TitleBar title="ULTIMOS POSTS" url="/" />
      </PageBlock>
      <Footer></Footer>
    </S.HomeComponentContainer>
  )
}
