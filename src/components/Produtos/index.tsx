import React from 'react';
import Button from '@mui/material/Button';
import styles from './Produtos.module.css';
import { IProduto } from '../../types/produto';

interface Props {
    produtos: IProduto
}

export default function Produtos({ produtos }: Props ) {

    return (
        <section>
            <ul className={styles.produtos}>
                {produtos.map(produto => (
                    <li className={styles.produto} key={produto.id}>
                        <img className={styles.imagem} src={produto.imagem} />
                        <h3 className={styles.titulo}>{produto.titulo}</h3>
                        <div className={styles.info}>
                            <p className={styles.precoAntigo}><s>R$ {produto.precoAntigo.toFixed(2)}</s></p>
                            <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>

                            <img className={styles.imagemEstrelas} src="./img/stars.png" />
                        </div>

                        <Button variant="contained" className={styles.botao}>
                            Adicionar ao Carrinho
                        </Button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
