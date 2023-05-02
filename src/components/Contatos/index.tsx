import React from 'react';
import styles from './Contatos.module.css';
import Button from '@mui/material/Button';

export default function Contatos() {
  return (
    <aside className={styles.contatos}>
      <div className={`${styles.appMensagem} ${styles.whatsapp}`}>
        <img src="./img/whatsapp.png" className={styles.appMensagem__imagem} />
        <p className={styles.appMensagem__mensagem}>Entre em contato conosco via Whatsapp</p>
        <button className={styles.whatsapp__botao}>
          Whatsapp
        </button>
      </div>
      <div className={`${styles.appMensagem} ${styles.telegram}`}>
        <img src="./img/telegram.png" className={styles.appMensagem__imagem} />
        <p className={styles.appMensagem__mensagem}>Entre em contanto conosco via Telegram</p>
        <button className={styles.telegram__botao}>
          Telegram
        </button>
      </div>
      <div className={styles.cadastroDeEmail}>
        <p className={styles.cadastroDeEmail__mensagem}>Receba as melhores ofertas via E-mail</p>
        <input type="text" className={styles.cadastroDeEmail__input} placeholder="Nome" />
        <input type="text" className={styles.cadastroDeEmail__input} placeholder="E-mail" />
        <Button variant="contained" className={styles.cadastroDeEmail__botao}>
          Receber
        </Button>
        
      </div>
    </aside>
  )
}
