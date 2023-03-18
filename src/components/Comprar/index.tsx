import React from 'react';
import styles from './Comprar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { ComprarItem } from './ComprarItem';


export default function Comprar() {
  return (
    <div className={styles.comprar}>

        <ComprarItem />

        <p>Há 2 itens no carrinho</p>

        <div className={styles.comprar__finalizar}>
            <p>Finalizar compra</p>
            
            <Badge badgeContent="2" className={styles.carrinho} color="primary">
                <ShoppingCartIcon />
            </Badge>
        </div>
    </div>
  )
}
