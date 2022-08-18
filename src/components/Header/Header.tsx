import { useMemo, useEffect, useState } from 'react'
import { Logo } from './components/Logo'
import { SearchBar } from './components/SearchBar'
import { generateCategories } from './helpers/generateCategories'
import Link from 'next/link'
import Router from 'next/router'
import type { HeaderProps } from './Header.types'
import * as S from './Header.styles'

export function Header({ categorias }: HeaderProps) {
  const [path, setPath] = useState('/')

  useEffect(() => {
    setPath(Router.asPath)
  }, [categorias])

  const categories = useMemo(() => {
    return generateCategories(categorias, path)
  }, [categorias, path])

  return (
    <S.HeaderContainer>
      <S.HeaderInnerContent>
        <S.HeaderTopContent>
          <Logo />
          <SearchBar />
        </S.HeaderTopContent>
        <S.HeaderBottomContent>
          <ul>
            {categories.map((categorie) => (
              <li
                key={categorie.url}
                id={`${categorie.isActive && 'current'}`}
                className={`${categorie.isButton && 'is-button'}`}
              >
                <Link href={categorie.url}>{categorie.name}</Link>
              </li>
            ))}
          </ul>
        </S.HeaderBottomContent>
      </S.HeaderInnerContent>
    </S.HeaderContainer>
  )
}
