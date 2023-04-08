import React from 'react';
import { IProduto } from '../../types/produto';
import styles from './Filtro.module.css';

interface Props {
  todosOsProdutos: IProduto[],
  filtros: {id: string, label: string, imagem: string}[],
  filtrarProdutos: (id: string) => void,
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[]>>
}

export default function Filtro({ todosOsProdutos, filtros, filtrarProdutos, setProdutos }: Props) {
  console.log(filtros)
  return (
    <section id="categorias">
      <ul className={styles.tags}>
        {filtros.map(opcao => (
          <li className={styles.tag} key={opcao.id} onClick={() => filtrarProdutos(opcao.id)}>
            <img src={opcao.imagem} className={styles.imagem} alt={opcao.label}/>
            <p className={styles.tag__texto}>{opcao.label}</p>
          </li>
        ))}
        <li className={styles.tag} key={"todos"} onClick={() => setProdutos(todosOsProdutos) }>
            <img src="./img/todos.jpg" className={styles.imagem} alt="Todos os produtos"/>
            <p className={styles.tag__texto}>Todos os Produtos</p>
          </li>
      </ul>
    </section>
  )
}
