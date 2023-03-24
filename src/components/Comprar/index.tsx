import React, { useContext } from 'react';
import styles from './Comprar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { ComprarItem } from './ComprarItem';
import { IProduto } from '../../types/produto';
import { useCarrinhoContext } from '../../common/context/Carrinho';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface Props {
  produto: IProduto, 
  setProduto: React.Dispatch<React.SetStateAction<IProduto>>
}

export default function Comprar({ produto, setProduto }: Props) {
  const {quantidadeCarrinho, valorTotal} = useCarrinhoContext();

  return (
    <div className={styles.comprar}>
        {produto ? <CloseIcon className={styles.close} onClick={() => setProduto(null)} /> : ''}
        {produto ? <ComprarItem produto={produto} /> : ''}


        {quantidadeCarrinho > 0 || produto ? 
          <div className={styles.comprar__finalizar}>
              <Badge badgeContent={quantidadeCarrinho} color="primary">
                  <ShoppingCartIcon />
              </Badge>
              
              <Link href="/carrinho" className={styles.verCarrinho}>Ver carrinho</Link>

              <p>R$ {valorTotal.toFixed(2)}</p>
          </div> 
          : ''
        }
    </div>
  )
}
