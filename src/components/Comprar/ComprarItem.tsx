import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import styles from './Comprar.module.css';
import { useCarrinhoContext } from '../../common/context/Carrinho';
import { IProduto } from '../../types/produto';

interface Props {
  produto: IProduto
}

export const ComprarItem = ({ produto }: Props) => {

  const { carrinho, adicionarCarrinho, removerCarrinho } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(item => item.id === produto.id);

  return (
    <>
        

        <p className={styles.comprarItem__tituloEPreco}>{produto.title} - R$ {produto.salePrice.replace(/&nbsp;/g, ' ')}</p>

        <div>
          <IconButton className={styles.adicionar} onClick={() => {adicionarCarrinho(produto)}} >
              <AddIcon />
          </IconButton>

          {produtoNoCarrinho?.quantidade || 0}

          <IconButton className={styles.remover} disabled={!produtoNoCarrinho} onClick={() => removerCarrinho(produto.id)}>
              <RemoveIcon />
          </IconButton>
        </div>
    </>
  )
}
