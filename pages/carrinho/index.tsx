import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './Carrinho.module.css';
import { ComprarItem } from '../../src/components/Comprar/ComprarItem';
import Button from '@mui/material/Button';

export default function carrinho() {
  return (
    <div>
        <div className={styles.cabecalho}>
            <h2 className={styles.cabecalho__titulo}>Carrinho</h2>

            <ArrowBackOutlinedIcon className={styles.cabecalho__voltar} />
        </div>
        <ul className={styles.produtos}>
          <li>
            <ComprarItem />
          </li>
          <li>
            <ComprarItem />
          </li>
        </ul>

        <p className={styles.total}>Total no carrinho:</p>
        <p className={styles.total}>R$ 79.90</p>
        

        <div className={styles.centralizadorDoBotao}>
          <Button color="primary" variant="contained" className={styles.comprar} >Compra</Button>
        </div>
    </div>
  )
}
