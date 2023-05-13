export interface IProduto {
    id: string, 
    title: string, 
    image: {sourceUrl: string}, 
    regularPrice: string, 
    salePrice: any, 
    maisPedidos: boolean, 
    categoria: {
        id: string, 
        label: string, 
        image: {sourceUrl: string} | null
    }
}

export interface IProdutoNoCarrinho extends IProduto {
    quantidade?: number
}


