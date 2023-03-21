import type { AppProps } from 'next/app';
import { CarrinhoProvider } from '../src/common/context/Carrinho';
import '../src/GlobalStyle.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CarrinhoProvider>
        <Component {...pageProps} />
      </CarrinhoProvider>
    </>
  );
}