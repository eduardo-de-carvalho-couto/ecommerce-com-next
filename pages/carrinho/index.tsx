import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './Carrinho.module.css';
import { ComprarItem } from '../../src/components/Comprar/ComprarItem';
import Button from '@mui/material/Button';
import { useCarrinhoContext } from '../../src/common/context/Carrinho';
import Link from 'next/link';

export default function carrinho() {
  const { carrinho, valorTotal } = useCarrinhoContext();
  
  return (
    <div>
        <div className={styles.cabecalho}>
            <h2 className={styles.cabecalho__titulo}>Carrinho</h2>

            <Link href="/"><ArrowBackOutlinedIcon className={styles.cabecalho__voltar} /></Link>
        </div>
        <ul className={styles.produtos}>
          {carrinho.map(produto => (
            <li key={produto.id}>
              <ComprarItem produto={produto} />
            </li>
          ))}
        </ul>

        <p className={styles.total}>Total no carrinho:</p>
        <p className={styles.total}>R$ {valorTotal.toFixed(2)}</p>
        

        <div className={styles.centralizadorDoBotao}>
          <Button color="primary" variant="contained" className={styles.comprar} >Compra</Button>
        </div>
    </div>
  )
}
