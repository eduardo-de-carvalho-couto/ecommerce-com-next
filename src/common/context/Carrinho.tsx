import { createContext, useContext, useEffect, useState } from "react";
import { IProdutoNoCarrinho } from "../../types/produto";

interface IProps {
    carrinho: IProdutoNoCarrinho[], 
    setCarrinho: React.Dispatch<React.SetStateAction<IProdutoNoCarrinho[]>>, 
    quantidadeCarrinho: number, 
    setQuantidadeCarrinho: React.Dispatch<React.SetStateAction<number>>, 
    valorTotal: number, 
    setValorTotal: React.Dispatch<React.SetStateAction<number>>
}

export const CarrinhoContext = createContext<IProps>({} as IProps);
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState<IProdutoNoCarrinho[]>([]);
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState<number>(0);
    const [valorTotal, setValorTotal] = useState<number>(0);

    return (
        <CarrinhoContext.Provider value={{
            carrinho, 
            setCarrinho, 
            quantidadeCarrinho, 
            setQuantidadeCarrinho, 
            valorTotal, 
            setValorTotal
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export const useCarrinhoContext = () => {
    const {
        carrinho, 
        setCarrinho, 
        quantidadeCarrinho, 
        setQuantidadeCarrinho, 
        valorTotal, 
        setValorTotal
    } = useContext(CarrinhoContext);

    const mudarQuantidade = (id: number, adicionarOuRemover: number) => carrinho.map(item => {
        if(item.id === id) item.quantidade += adicionarOuRemover;
        return item
    })

    function adicionarCarrinho(produtoNovo: IProdutoNoCarrinho){
        const temOProduto:boolean = carrinho.some(item => item.id === produtoNovo.id);
        let novoCarrinho: IProdutoNoCarrinho[] = [...carrinho];
        if(!temOProduto) {
            produtoNovo.quantidade = 1;
            novoCarrinho.push(produtoNovo);
            return setCarrinho(novoCarrinho);
        }
        novoCarrinho = mudarQuantidade(produtoNovo.id, 1);
        return setCarrinho(novoCarrinho);
    }

    function removerCarrinho(id: number) {
        let produto: IProdutoNoCarrinho = carrinho.find(item => item.id === id);
        let novoCarrinho: IProdutoNoCarrinho[];
        if(produto.quantidade === 1) {
            novoCarrinho = carrinho.filter(item => item.id !== id);
            return setCarrinho(novoCarrinho);
        }
        novoCarrinho = mudarQuantidade(id, -1);
        return setCarrinho(novoCarrinho);
    }

    useEffect(() => {
        let {novaQuantidade, novoValor}: {novaQuantidade: number, novoValor: number} = carrinho.reduce((acumulador, produtoAtual) => ({
            novaQuantidade: acumulador.novaQuantidade + produtoAtual.quantidade, 
            novoValor: acumulador.novoValor + (produtoAtual.preco * produtoAtual.quantidade)
        }), {novaQuantidade: 0, novoValor: 0});
        setQuantidadeCarrinho(novaQuantidade);
        setValorTotal(novoValor);
    }, [carrinho, setQuantidadeCarrinho, setValorTotal]);

    return {
        carrinho, 
        adicionarCarrinho, 
        removerCarrinho, 
        quantidadeCarrinho, 
        valorTotal
    }
}
