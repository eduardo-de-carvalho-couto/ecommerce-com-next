import React from 'react';
import styles from './Comprar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { ComprarItem } from './ComprarItem';
import { IProduto } from '../../types/produto';

interface Props {
  produto: IProduto
}

export default function Comprar({ produto }: Props) {
  return (
    <div className={styles.comprar}>

        <ComprarItem produto={produto} />


        <div className={styles.comprar__finalizar}>
            <p>Ver carrinho</p>
            
            <Badge badgeContent="2" className={styles.carrinho} color="primary">
                <ShoppingCartIcon />
            </Badge>
        </div>
    </div>
  )
}
