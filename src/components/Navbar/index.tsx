import { useState } from "react";
import styles from "./navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

function Navbar() {
  const [abrirMenuMobile, setAbrirMenuMobile] = useState(false);

    return (
        <header className={styles.cabecalho}>
          
          <div className={styles.hamburger}>
            <label htmlFor="menu">
              <MenuIcon className={styles.botaoMenu} />
            </label>
            <input id="menu" type="checkbox" style={{display: "none"}} onClick={() => {setAbrirMenuMobile(!abrirMenuMobile)}} />
          </div>
          <div className={abrirMenuMobile ? `${styles.containerMenu} ${styles.abrirMenuMobile}` : `${styles.containerMenu} ${styles.fecharMenuMobile}`}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link className={styles.link} href="#home" onClick={() => {setAbrirMenuMobile(!abrirMenuMobile)}}>Home</Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.link} href="/carrinho" onClick={() => {setAbrirMenuMobile(!abrirMenuMobile)}}>Carrinho</Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.link} href="#categorias" onClick={() => {setAbrirMenuMobile(!abrirMenuMobile)}}>Categorias</Link>
              </li>
              <li className={styles.menuItem}>
                <Link className={styles.link} href="#produtos" onClick={() => {setAbrirMenuMobile(!abrirMenuMobile)}}>Produtos</Link>
              </li>
            </ul>
          </div>
        </header>
    );
}

export default Navbar;