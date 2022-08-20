import { useMemo, useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { generateCategories } from '../../helpers/generateCategories'
import type { MenuItemsProps } from './MenuItems.types'
import * as S from './MenuItems.styles'

export function MenuItems({ categorias }: MenuItemsProps) {
  const [path, setPath] = useState('/')

  useEffect(() => {
    setPath(Router.asPath)
  }, [categorias])

  const categories = useMemo(() => {
    return generateCategories(categorias, path)
  }, [categorias, path])

  return (
    <S.MenuItemsContainer>
      {categories.map((categorie) => (
        <li
          key={categorie.url}
          id={`${categorie.isActive && 'current'}`}
          className={`${categorie.isButton && 'is-button'}`}
        >
          <Link href={categorie.url}>{categorie.name}</Link>
        </li>
      ))}
    </S.MenuItemsContainer>
  )
}
