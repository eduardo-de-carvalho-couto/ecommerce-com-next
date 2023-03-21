import produtos from '../json/produtos.json';

export type IProdutos = typeof produtos;

export type IProduto = typeof produtos[0];

export interface IProdutoNoCarrinho extends IProduto {
    quantidade?: number
}

