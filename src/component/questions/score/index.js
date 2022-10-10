import styles from "../../Quizzes/quizz.module.css";
import corujas from "../../../img/coruja-cinza.svg";

const Score = ({ score, questions }) => {
  return (
    <div className={styles.score_section}>
      <h1>Quizz de Revisão</h1>
      <br></br>
      <h2>Seu Resultado</h2>
      Você pontuou {score} de {questions.length}
      <br></br>
      <img src={corujas} alt="Corujas" />
    </div>
  );
};

export default Score;
