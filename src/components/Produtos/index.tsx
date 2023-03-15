import React from 'react';
import Button from '@mui/material/Button';
import styles from './Produtos.module.css';

export default function Produtos() {
  return (
    <div className={styles.produtos}>
        <div className={styles.produto}>
            <img className={styles.imagem} src="./img/shampoo.png" />
            <h3 className={styles.titulo}>Shampoo</h3>
            <div className={styles.info}>
                <p className={styles.precoAntigo}><s>R$ 120,00</s></p>
                <p className={styles.preco}>R$ 100,00</p>

                <img className={styles.imagemEstrelas} src="./img/stars.png" />
            </div>

            <Button variant="contained" className={styles.botao}>
                Adicionar ao Carrinho
            </Button>
        </div>
    </div>
  )
}
