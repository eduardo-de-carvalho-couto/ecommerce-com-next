import Banner from "../src/components/Banner"
import Navbar from "../src/components/Navbar"
import Filtro from "../src/components/Filtro"
import Produtos from "../src/components/Produtos"
import { useState } from "react"
import { IProduto } from "../src/types/produto"
import Contatos from "../src/components/Contatos"
import Informacoes from "../src/components/Informacoes"
import Footer from "../src/components/Footer"
import Comprar from "../src/components/Comprar"
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { gql } from "@apollo/client"
import { client } from "../src/services/apolloClient/apolloClient"
import Head from "next/head"

export const getStaticProps: GetStaticProps = async () => {

const { data } = await client.query({
  query: gql`
    query GetAllProductsAndCategories {
      products {
        nodes {
          id
          name
          title
          ... on SimpleProduct {
            regularPrice
            salePrice
          }
          ... on VariableProduct {
            regularPrice
            salePrice
          }
          image {
            sourceUrl
          } 
          productCategories {
            nodes {
              id
              name
            }
          }
        }
      }, 
      productCategories {
        nodes {
          id 
          menuOrder
          name
          image {
            sourceUrl
          }
        }
      }
    }
  `,
  fetchPolicy: 'no-cache',
});

  return {
    props: {
      todosOsProdutos: data
    }
  }
}

function HomePage({ todosOsProdutos }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [produtos, setProdutos] = useState<IProduto[]>(todosOsProdutos.products.nodes);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>();

  function filtrarProdutos(id: string) {
    const produtosFiltrados = todosOsProdutos.products.nodes.filter(produto => {
      return produto.productCategories.nodes.some(categoria => categoria.id === id)
    });

    setProdutos(produtosFiltrados);
  }

    return (
      <>
        <Head>
          <title>Ecommerce</title>
        </Head>

        <Navbar />

        <Banner />
        <Filtro todosOsProdutos={todosOsProdutos.products.nodes} filtros={todosOsProdutos.productCategories.nodes} filtrarProdutos={filtrarProdutos} setProdutos={setProdutos} />
        <div className="container__desktop">
          <Produtos produtos={produtos} selecionarProduto={setProdutoSelecionado} />
          <Contatos />
        </div>
        <Informacoes />
        <Footer />

        <Comprar produto={produtoSelecionado} setProduto={setProdutoSelecionado} />
      </>
    );
  }
  
  export default HomePage
