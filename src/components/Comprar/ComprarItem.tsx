import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Comprar.module.css';

export const ComprarItem = () => {
  return (
    <>
        <CloseIcon className={styles.close} />

        <p className={styles.comprarItem__tituloEPreco}>Nome do produto - Preço</p>

        <IconButton className={styles.adicionar} onClick={() => {console.log('adicionando')}} >
            <AddIcon />
        </IconButton>

        0

        <IconButton className={styles.remover} disabled={false}>
            <RemoveIcon />
        </IconButton>
    </>
  )
}
