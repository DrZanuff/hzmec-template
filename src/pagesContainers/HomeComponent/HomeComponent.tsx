import { useEffect } from 'react'
import { TitleBar } from '../../components/TitleBar'
import { PageBlock } from '../../components/PageBlock'
import { getHomeProps } from '../../api/getHomeProps'
import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'

export function HomeComponent({ categorias }: HomeComponentProps) {
  // useEffect(() => {
  //   async function getData() {
  //     const response = await getHomeProps()

  //     console.log('RESPONSE!!!', response)
  //   }

  //   getData()
  // }, [])

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
