import React from 'react';
import Button from '@mui/material/Button';
import styles from './Produtos.module.css';
import { IProduto } from '../../types/produto';

interface Props {
    produtos: IProduto[], 
    selecionarProduto: React.Dispatch<React.SetStateAction<IProduto>>
}

export default function Produtos({ produtos, selecionarProduto }: Props ) {

    return (
        <div id="produtos">
            <ul className={styles.produtos}>
                {produtos.map(produto => (
                    <li className={styles.produto} key={produto.id}>
                        <img className={styles.imagem} src={produto.image.sourceUrl} />
                        <h3 className={styles.titulo}>{produto.title}</h3>
                        <div className={styles.info}>
                            <p className={styles.precoAntigo}><s>{produto.regularPrice.replace(/&nbsp;/g, ' ')}</s></p>
                            <p className={styles.preco}>{produto.salePrice.replace(/&nbsp;/g, ' ')}</p>

                            <img className={styles.imagemEstrelas} src="./img/stars.png" />
                        </div>

                        <Button variant="contained" className={styles.botao} onClick={() => selecionarProduto(produto)}>
                            Comprar
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
