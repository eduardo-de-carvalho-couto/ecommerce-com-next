export interface IProduto {
    id: string, 
    titulo: string, 
    imagem: string, 
    precoAntigo: number, 
    preco: number, 
    maisPedidos: boolean, 
    categoria: {
        id: string, 
        label: string
    }
}

export interface IProdutoNoCarrinho extends IProduto {
    quantidade?: number
}


