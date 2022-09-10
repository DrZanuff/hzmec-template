import { Logo } from './components/Logo'
import { SearchBar } from './components/SearchBar'
import { MobileMenu } from './components/MobileMenu'
import { MenuItems } from './components/MenuItems'
import * as S from './Header.styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderInnerContent>
        <S.HeaderTopContent>
          <Logo />
          <S.MenuInput>
            <MobileMenu />
            <SearchBar />
          </S.MenuInput>
        </S.HeaderTopContent>

        <S.HeaderBottomContent>
          <MenuItems />
        </S.HeaderBottomContent>
      </S.HeaderInnerContent>
    </S.HeaderContainer>
  )
}
