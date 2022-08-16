import type { FooterProps } from './Footer.types'
import * as S from './Footer.styles'
import { FooterLink } from '../FooterLink'
import { TitleBar } from '../../components/TitleBar'
import Image from 'next/image'
import { InstagramIcon, WhatsappIcon } from '../../Icons'

export function Footer({ value }: FooterProps) {
  return (
    <S.FooterContainer>
      <S.FooterInnerContent>
        <S.LeftContainer>
          <FooterLink path="/" text="Institucional" />
          <FooterLink path="/" text="Quem somos" />
          <FooterLink path="/" text="Dados bancários" />
          <FooterLink path="/" text="Sobre o SOS" />
          <FooterLink path="/" text="Prazos" />
          <p>SIGA-NOS</p>
          <FooterLink path="/" text="Instagram" icon={<InstagramIcon />} />
          <FooterLink path="/" text="Whatsapp" icon={<WhatsappIcon />} />
        </S.LeftContainer>
        <S.CenterContainer>
          <h1>CONTATO</h1>
          <p>Telefone: (61) 98213-2784</p>
          <p>Email: jonas@hzmec.com.br</p>
          {/* <img src="../MapImage.png" alt="Mapa da HZMEC" /> */}
          <Image
            src={'/MapImage.png'}
            alt="Mapa da HZMEC"
            width={247}
            height={148}
          />
          <S.CenteredText>
            ADE quadra 600 conjunto 02 lote 32 - Recanto das Emas, Brasília -
            DF, 72640-100
          </S.CenteredText>
        </S.CenterContainer>
        <S.RightContainer>
          <FooterLink path="/" text="Fale Conosco" />
          <FooterLink path="/" text="Dúvidas frequentes" />
          <TitleBar title="Formas de pagamento" />
        </S.RightContainer>
      </S.FooterInnerContent>
    </S.FooterContainer>
  )
}
