import Link from 'next/link';
import React from 'react';
import styles from './Informacoes.module.css';

export default function Informacoes() {
  return (
    <section className={styles.informacoes}>
        <div className={styles.informacao}>
            <h3 className={styles.informacao__titulo}>Informações</h3>
            <ul className={styles.informacao__itens}>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
            </ul>
        </div>
        <div className={styles.informacao}>
            <h3 className={styles.informacao__titulo}>Informações</h3>
            <ul className={styles.informacao__itens}>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
            </ul>
        </div>
        <div className={styles.informacao}>
            <h3 className={styles.informacao__titulo}>Informações</h3>
            <ul className={styles.informacao__itens}>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Foo</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">Bar</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}
