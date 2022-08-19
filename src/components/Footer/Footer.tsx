import type { FooterProps } from './Footer.types'
import * as S from './Footer.styles'
import { FooterLink } from '../FooterLink'
import { TitleBar } from '../../components/TitleBar'
import Image from 'next/image'
import * as Icons from '../../Icons'

export function Footer({ value }: FooterProps) {
  return (
    <S.FooterContainer>
      <S.FooterInnerContent>
        <S.Collumm>
          <FooterLink path="/" text="Institucional" />
          <FooterLink path="/" text="Quem somos" />
          <FooterLink path="/" text="Dados bancários" />
          <FooterLink path="/" text="Sobre o SOS" />
          <FooterLink path="/" text="Prazos" />
          <div id="follow-us">
            <p>SIGA-NOS</p>
            <FooterLink
              path="/"
              text="Instagram"
              icon={<Icons.InstagramIcon />}
            />
            <FooterLink
              path="/"
              text="Whatsapp"
              icon={<Icons.WhatsappIcon />}
            />
          </div>
        </S.Collumm>
        <S.Collumm maxWidth="247px">
          <h3>CONTATO</h3>
          Telefone: (61) 98213-2784
          <br />
          Email: jonas@hzmec.com.br
          <br />
          {/* <img src="../MapImage.png" alt="Mapa da HZMEC" /> */}
          <Image
            src={'/MapImage.png'}
            alt="Mapa da HZMEC"
            width={247}
            height={148}
          />
          <p className="centered-text">
            ADE quadra 600 conjunto 02 lote 32 - Recanto das Emas, Brasília -
            DF, 72640-100
          </p>
        </S.Collumm>
        <S.Collumm minWidth="288px">
          <FooterLink path="/" text="Fale Conosco" />
          <FooterLink path="/" text="Dúvidas frequentes" />
          <TitleBar title="Formas de pagamento" />
          <S.Row>
            <Icons.MastercardIcon />
            <Icons.VisaIcon />
            <Icons.EloIcon />
            <Icons.PixIcon />
          </S.Row>
        </S.Collumm>
      </S.FooterInnerContent>
    </S.FooterContainer>
  )
}
