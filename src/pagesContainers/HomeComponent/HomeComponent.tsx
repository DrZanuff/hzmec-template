import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'

export function HomeComponent({
  categorias,
  posts,
  projetos,
}: HomeComponentProps) {
  console.log('categorias', categorias)
  console.log('posts', posts)
  console.log('projetos', projetos)

  return (
    <S.HomeComponentContainer>
      {categorias?.map((categoria) => (
        <span key={categoria.id}>{categoria.fields.nome}</span>
      ))}
      <PageBlock gap={30} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" />
        <TitleBar title="ULTIMOS POSTS" url="/" />
      </PageBlock>
    </S.HomeComponentContainer>
  )
}
