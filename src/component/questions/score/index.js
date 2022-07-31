import styles from "../../Quizzes/quizz.module.css";

const Score = ({ score, questions }) => {
  return (
    <div className={styles.score_section}>
      Você pontuou {score} de {questions.length}
    </div>
  );
};

export default Score;
