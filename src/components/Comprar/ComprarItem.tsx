import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Comprar.module.css';
import { useCarrinhoContext } from '../../common/context/Carrinho';
import { IProduto, IProdutoNoCarrinho } from '../../types/produto';

interface Props {
  produto: IProduto
}

export const ComprarItem = ({ produto }: Props) => {

  const { carrinho, adicionarCarrinho, removerCarrinho } = useCarrinhoContext();
  const produtoNoCarrinho: boolean = carrinho.some(item => item.id === produto.id);

  return (
    <>
        <CloseIcon className={styles.close} />

        <p className={styles.comprarItem__tituloEPreco}>Nome do produto - Preço</p>

        <IconButton className={styles.adicionar} onClick={() => {adicionarCarrinho(produto)}} >
            <AddIcon />
        </IconButton>

        0

        <IconButton className={styles.remover} disabled={!produtoNoCarrinho} onClick={() => removerCarrinho(produto.id)}>
            <RemoveIcon />
        </IconButton>
    </>
  )
}
