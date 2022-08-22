import { useMemo, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { categoriaContext } from '../../../../Atoms/HomePageAtoms'
import Router from 'next/router'
import { v4 } from 'uuid'
import { generateCategories } from '../../helpers/generateCategories'
import * as S from './MenuItems.styles'

export function MenuItems() {
  const categorias = useRecoilValue(categoriaContext)
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
          key={v4()}
          id={`${categorie.isActive && 'current'}`}
          className={`${categorie.isButton && 'is-button'}`}
        >
          <Link href={categorie.url}>{categorie.name}</Link>
        </li>
      ))}
    </S.MenuItemsContainer>
  )
}
