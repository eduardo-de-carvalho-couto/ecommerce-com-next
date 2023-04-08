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
import { cmsService } from "../src/infra/cms/cmsService"

export const getStaticProps: GetStaticProps = async () => {
  
  const contentQuery = `
  query {
    allProdutos {
      id, 
      imagem, 
      precoAntigo, 
      preco, 
      maisPedidos,
      titulo, 
      categoria {
        id, 
        label
      }
    }, 
    allProductCategories {
      id, 
      label, 
      imagem
    }
  }
  `;
  const { data } = await cmsService({
    query: contentQuery
  });

  return {
    props: {
      todosOsProdutos: data
    }
  }
}

function HomePage({ todosOsProdutos }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [produtos, setProdutos] = useState<IProduto[]>(todosOsProdutos.allProdutos);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>();

  function filtrarProdutos(id: string) {
    const produtosFiltrados = todosOsProdutos.allProdutos.filter(produto => produto.categoria.id === id)
    setProdutos(produtosFiltrados);
  }

    return (
      <>
        <Navbar />

        <Banner />
        <Filtro todosOsProdutos={todosOsProdutos.allProdutos} filtros={todosOsProdutos.allProductCategories} filtrarProdutos={filtrarProdutos} setProdutos={setProdutos} />
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
