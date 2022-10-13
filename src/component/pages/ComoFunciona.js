import styles from "./comofunciona.module.css";
import menuIniciar from "../../img/menuIniciar.jpg";
import assuntoMateria from "../../img/assuntoMateria.jpg";
import cards from "../../img/cards.jpg";
import carrossel from "../../img/historia-seta.jpg";
import conteudo from "../../img/historia-conteudo.jpg";
import quizz from "../../img/historia-quizz.jpg";
import { Link } from "react-router-dom";

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
      <div className={styles.secao}>
        <p>
          Com a historia aberta, selecione a seta da direita para avançar e a da
          esquerda para retroceder:
        </p>
        <img
          className={styles.cardImage}
          src={carrossel}
          alt="assuntoMateria"
        />
      </div>
      <div className={styles.secaoLarge}>
        <p>
          Toda história possui um texto para referência sobre o conteúdo, visto
          que o objetivo é auxiliar os alunos, sobre o que aprenderam em sala de
          aula:
        </p>
        <img
          className={styles.cardImageLarge}
          src={conteudo}
          alt="assuntoMateria"
        />
      </div>

      <div className={styles.secao}>
        <p>
          Por fim, para completar a experiência na plataforma, cada história
          propõe um quizz, o qual o aluno testa seu conhecimento sobre o
          assunto:
        </p>
        <img className={styles.cardImage} src={quizz} alt="assuntoMateria" />
      </div>
      <button className={styles.link_home}>
        <Link className={styles.link} to="/cards">
          Ir para Histórias
        </Link>
      </button>
    </div>
  );
}

export default ComoFunciona;
