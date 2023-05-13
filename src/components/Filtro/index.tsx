import React from 'react';
import { IProduto } from '../../types/produto';
import styles from './Filtro.module.css';

interface Props {
  todosOsProdutos: IProduto[],
  filtros: {id: string, name: string, image: {sourceUrl: string} | null, menuOrder: number}[],
  filtrarProdutos: (id: string) => void,
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[]>>
}

export default function Filtro({ todosOsProdutos, filtros, filtrarProdutos, setProdutos }: Props) {

  const filtrosOrdenados = filtros.sort(function(a, b){return a.menuOrder - b.menuOrder});

  return (
    <section id="categorias">
      <ul className={styles.tags}>
        {filtrosOrdenados.map(opcao => {
          if(opcao.id !== 'dGVybToxNQ==') {
            return (
              <li className={styles.tag} key={opcao.id} onClick={() => filtrarProdutos(opcao.id)}>
                <img src={opcao.image?.sourceUrl} className={styles.imagem} alt={opcao.name}/>
                <p className={styles.tag__texto}>{opcao.name}</p>
              </li>
            )
          }
        })}
        <li className={styles.tag} key={"todos"} onClick={() => setProdutos(todosOsProdutos) }>
            <img src="./img/todos.jpg" className={styles.imagem} alt="Todos os produtos"/>
            <p className={styles.tag__texto}>Todos os Produtos</p>
          </li>
      </ul>
    </section>
  )
}
