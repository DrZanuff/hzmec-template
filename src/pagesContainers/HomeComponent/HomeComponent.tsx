import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'

export function HomeComponent({ value }: HomeComponentProps) {
  return (
    <S.HomeComponentContainer>
      <PageBlock gap={30} marginTop={20}>
        <TitleBar title="ULTIMOS POSTS" />
        <TitleBar title="ULTIMOS POSTS" url="/" />
      </PageBlock>
    </S.HomeComponentContainer>
  )
}
