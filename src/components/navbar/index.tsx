import { useState } from "react";
import styles from "./navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';

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
                Home
              </li>
              <li className={styles.menuItem}>
                Categorias
              </li>
              <li className={styles.menuItem}>
                Todos os Produtos
              </li>
              <li className={styles.menuItem}>
                Lançamentos
              </li>
              <li className={styles.menuItem}>
                Cupons
              </li>
              <li className={styles.menuItem}>
                Contato
              </li>
            </ul>
          </div>
        </header>
    );
}

export default Navbar;