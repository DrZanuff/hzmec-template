import { useState, useCallback } from 'react'
import { MenuItems } from '../MenuItems'
import { MobileMenuClose, MobileMenuOpen } from '../../../../Icons'
import * as S from './MobileMenu.styles'

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuButtonClick = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <S.MobileMenuContainer>
      <button onClick={handleMenuButtonClick}>
        {!isMenuOpen && <MobileMenuOpen />}
        {isMenuOpen && <MobileMenuClose />}
      </button>
      <S.Menu active={isMenuOpen}>
        <MenuItems />
      </S.Menu>
    </S.MobileMenuContainer>
  )
}
