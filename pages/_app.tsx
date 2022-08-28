import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NextNProgress from 'nextjs-progressbar'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NextNProgress color={theme.colors.RED} height={4} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
