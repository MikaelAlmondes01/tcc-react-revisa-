import styles from "./home.module.css";
import corujas from "../../img/coruja-cinza.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Revisa+</span>
      </h1>
      <p>Comece a revisar seus conteúdos escolares agora mesmo!</p>
      <img src={corujas} alt="Corujas" />
      <button className={styles.link_home}>
        <Link className={styles.link} to="/comofunciona">
          Como Funciona
        </Link>
      </button>
    </section>
  );
}

export default Home;
