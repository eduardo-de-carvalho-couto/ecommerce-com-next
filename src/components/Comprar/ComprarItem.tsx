import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Comprar.module.css';
import { useCarrinhoContext } from '../../common/context/Carrinho';
import { IProduto } from '../../types/produto';

interface Props {
  produto: IProduto, 
  setProduto: React.Dispatch<React.SetStateAction<IProduto>>
}

export const ComprarItem = ({ produto, setProduto }: Props) => {

  const { carrinho, adicionarCarrinho, removerCarrinho } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(item => item.id === produto.id);

  return (
    <>
        <CloseIcon className={styles.close} onClick={() => setProduto(null)} />

        <p className={styles.comprarItem__tituloEPreco}>{produto.titulo} - R$ {produto.preco.toFixed(2)}</p>

        <IconButton className={styles.adicionar} onClick={() => {adicionarCarrinho(produto)}} >
            <AddIcon />
        </IconButton>

        {produtoNoCarrinho?.quantidade || 0}

        <IconButton className={styles.remover} disabled={!produtoNoCarrinho} onClick={() => removerCarrinho(produto.id)}>
            <RemoveIcon />
        </IconButton>
    </>
  )
}
