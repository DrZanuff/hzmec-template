import { Logo } from './components/Logo'
import { SearchBar } from './components/SearchBar'
import { MobileMenu } from './components/MobileMenu'
import { MenuItems } from './components/MenuItems'
import type { HeaderProps } from './Header.types'
import * as S from './Header.styles'

export function Header({ categorias }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderInnerContent>
        <S.HeaderTopContent>
          <Logo />
          <S.MenuInput>
            <MobileMenu categorias={categorias} />
            <SearchBar />
          </S.MenuInput>
        </S.HeaderTopContent>
        <S.HeaderBottomContent>
          <MenuItems categorias={categorias} />
        </S.HeaderBottomContent>
      </S.HeaderInnerContent>
    </S.HeaderContainer>
  )
}
