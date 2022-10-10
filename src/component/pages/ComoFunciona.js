import styles from "./comofunciona.module.css";
import menuIniciar from "../../img/menuIniciar.jpg";
import assuntoMateria from "../../img/assuntoMateria.jpg";
import cards from "../../img/cards.jpg";

function ComoFunciona() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tutorial de como utilizar a aplicação</h1>
      <div className={styles.secaoSmall}>
        <p>
          No menu iniciar, acesse a aba do menu <span>CARDS</span> para
          encontrar as matérias:
        </p>
        <img
          className={styles.cardImageSmall}
          src={menuIniciar}
          alt="menuIniciar"
        />
      </div>
      <div className={styles.secaoLarge}>
        <p>Na página, escolha a matéria que deseja:</p>
        <img className={styles.cardImageLarge} src={cards} alt="cards" />
      </div>
      <div className={styles.secao}>
        <p>
          Escolha o assunto das histórias para ler, basta rolar o scrum para
          baixo e visualizar todos:
        </p>
        <img
          className={styles.cardImage}
          src={assuntoMateria}
          alt="assuntoMateria"
        />
      </div>
    </div>
  );
}

export default ComoFunciona;
