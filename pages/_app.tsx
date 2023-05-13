import type { AppProps } from 'next/app';
import { CarrinhoProvider } from '../src/common/context/Carrinho';
import '../src/GlobalStyle.css';
import { ECApolloClient } from '../src/services/apolloClient/apolloClient';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ECApolloClient>
        <CarrinhoProvider>
          <Component {...pageProps} />
        </CarrinhoProvider>
      </ECApolloClient>
    </>
  );
}