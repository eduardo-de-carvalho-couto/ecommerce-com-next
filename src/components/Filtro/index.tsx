import React from 'react';
import { IProdutos } from '../../types/produto';
import styles from './Filtro.module.css';
import filtros from './filtros.json';
import produtos from '../../json/produtos.json';

interface Props {
  filtrarProdutos: (id: number) => void,
  setProdutos: React.Dispatch<React.SetStateAction<IProdutos>>
}

export default function Filtro({ filtrarProdutos, setProdutos }: Props) {
  return (
    <section>
      <ul className={styles.tags}>
        {filtros.map(opcao => (
          <li className={styles.tag} key={opcao.id} onClick={() => filtrarProdutos(opcao.id)}>
            <img src={opcao.imagem} className={styles.imagem} alt={opcao.label}/>
            <p className={styles.tag__texto}>{opcao.label}</p>
          </li>
        ))}
        <li className={styles.tag} key={"todos"} onClick={() => setProdutos(produtos) }>
            <img src="./img/todos.jpg" className={styles.imagem} alt="Todos os produtos"/>
            <p className={styles.tag__texto}>Todos os Produtos</p>
          </li>
      </ul>
    </section>
  )
}
