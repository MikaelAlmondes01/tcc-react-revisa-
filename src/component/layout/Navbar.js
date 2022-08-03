import { Link } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import Container from "./Container";

import styles from "./navbar.module.css";
import logo from "../../img/Coruja2-icone.png";

function Navbar() {
  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.coruja} to="/">
          <img src={logo} alt="Coruja" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/comofunciona">Como Funciona</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre a ferramenta</Link>
          </li>
          <li className={styles.item}>
            <h3>|</h3>
          </li>

          {!user && (
            <>
              <li className={styles.item}>
                <Link to="/login">Login</Link>
              </li>
              <li className={styles.item}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li className={styles.item}>
                <Link to="/cards">Cards</Link>
              </li>

              <li>
                <button onClick={logout}>Sair</button>
              </li>
            </>
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
