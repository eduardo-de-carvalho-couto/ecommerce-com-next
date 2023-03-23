import React, { useContext } from 'react';
import styles from './Comprar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { ComprarItem } from './ComprarItem';
import { IProduto } from '../../types/produto';
import { useCarrinhoContext } from '../../common/context/Carrinho';

interface Props {
  produto: IProduto, 
  setProduto: React.Dispatch<React.SetStateAction<IProduto>>
}

export default function Comprar({ produto, setProduto }: Props) {
  const {quantidadeCarrinho, valorTotal} = useCarrinhoContext();

  return (
    <div className={styles.comprar}>

        <ComprarItem produto={produto} setProduto={setProduto} />


        <div className={styles.comprar__finalizar}>
            <Badge badgeContent={quantidadeCarrinho} className={styles.carrinho} color="primary">
                <ShoppingCartIcon />
            </Badge>
            
            <p>Ver carrinho</p>

            {valorTotal.toFixed(2)}
        </div>
    </div>
  )
}
