import type { AppProps } from 'next/app'
import '../src/GlobalStyle.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}