import React from 'react';
import styles from './Filtro.module.css';
import filtros from './filtros.json'

export default function Filtro() {
  return (
    <section>
      <ul className={styles.tags}>
        {filtros.map(opcao => (
          <li className={styles.tag} key={opcao.id}>
            <img src={opcao.imagem} className={styles.imagem} alt={opcao.label}/>
            <p className={styles.tag__texto}>{opcao.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
