import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import { Footer } from '../../components/Footer'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'

export function HomeComponent({ value }: HomeComponentProps) {
  return (
    <S.HomeComponentContainer>
      <PageBlock gap={30} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" />
        <TitleBar title="ULTIMOS POSTS" url="/" />
      </PageBlock>
      <Footer></Footer>
    </S.HomeComponentContainer>
  )
}
