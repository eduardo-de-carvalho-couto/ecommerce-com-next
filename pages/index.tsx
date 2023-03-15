import Banner from "../src/components/Banner"
import Navbar from "../src/components/Navbar"
import Filtro from "../src/components/Filtro"
import Produtos from "../src/components/Produtos"

function HomePage() {

  {/* Chamar produtos */}
  {/* filtrarProdutos() */}
  {/* Lançamentos e Promoções */}

    return (
      <>
        <Navbar />
        <Banner />
        <Filtro />
        <Produtos />
        <div>Coluna aside de Contatos</div>
        <div>Div informativa</div>
        <div>Footer</div>
      </>
    );
  }
  
  export default HomePage
