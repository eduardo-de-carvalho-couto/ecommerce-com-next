import Banner from "../src/components/Banner"
import Navbar from "../src/components/Navbar"
import Filtro from "../src/components/Filtro"
import Produtos from "../src/components/Produtos"
import itens from "../src/json/produtos.json"
import { useState } from "react"
import { IProduto, IProdutos } from "../src/types/produto"
import Contatos from "../src/components/Contatos"
import Informacoes from "../src/components/Informacoes"
import Footer from "../src/components/Footer"
import Comprar from "../src/components/Comprar"


function HomePage() {

  const [produtos, setProdutos] = useState<IProdutos>(itens);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>();

  function filtrarProdutos(id: number) {
    const produtosFiltrados = itens.filter(produto => produto.id === id)
    setProdutos(produtosFiltrados);
  }

    return (
      <>
        <Navbar />

        <Banner />
        <Filtro filtrarProdutos={filtrarProdutos} setProdutos={setProdutos} />
        <Produtos produtos={produtos} selecionarProduto={setProdutoSelecionado} />
        <Contatos />
        <Informacoes />
        <Footer />

        {produtoSelecionado ? <Comprar produto={produtoSelecionado} setProduto={setProdutoSelecionado} /> : ''};
      </>
    );
  }
  
  export default HomePage
