import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import { Footer } from '../../components/Footer'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'
import { Header } from '../../components/Header'

export function HomeComponent({
  categorias,
  posts,
  projetos,
  instafeed,
}: HomeComponentProps) {
  console.log('categorias', categorias)
  console.log('posts', posts)
  console.log('projetos', projetos)
  console.log('instafeed', instafeed)

  return (
    <S.HomeComponentContainer>
      <Header categorias={categorias} />
      <PageBlock gap={30} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" />
        <TitleBar title="ULTIMOS POSTS" url="/" />
      </PageBlock>
      <Footer></Footer>
    </S.HomeComponentContainer>
  )
}
