import styles from "../../Quizzes/quizz.module.css";

const QuestionBox = ({ isRespondeu, currentQuestion, questions, onClick }) => {
  return (
    <>
      <div className={styles.question_section}>
        <div className={styles.question_count}>
          <span>Questão {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className={styles.question_text}>
          {questions[currentQuestion].pergunta}
        </div>
      </div>

      <div className={styles.answer_section}>
        <button
          className={
            isRespondeu
              ? questions[currentQuestion].resposta_a.is_correta
                ? styles.correta
                : styles.errada
              : styles.but
          }
          onClick={() =>
            onClick(questions[currentQuestion].resposta_a.is_correta)
          }
        >
          {questions[currentQuestion].resposta_a.descricao}
        </button>
        <button
          className={
            isRespondeu
              ? questions[currentQuestion].resposta_b.is_correta
                ? styles.correta
                : styles.errada
              : styles.but
          }
          onClick={() =>
            onClick(questions[currentQuestion].resposta_b.is_correta)
          }
        >
          {questions[currentQuestion].resposta_b["descricao"]}
        </button>
        <button
          className={
            isRespondeu
              ? questions[currentQuestion].resposta_c.is_correta
                ? styles.correta
                : styles.errada
              : styles.but
          }
          onClick={() =>
            onClick(questions[currentQuestion].resposta_c.is_correta)
          }
        >
          {questions[currentQuestion].resposta_c["descricao"]}
        </button>
        <button
          className={
            isRespondeu
              ? questions[currentQuestion].resposta_d.is_correta
                ? styles.correta
                : styles.errada
              : styles.but
          }
          onClick={() =>
            onClick(questions[currentQuestion].resposta_d.is_correta)
          }
        >
          {questions[currentQuestion].resposta_d["descricao"]}
        </button>
        <button
          className={
            isRespondeu
              ? questions[currentQuestion].resposta_e.is_correta
                ? styles.correta
                : styles.errada
              : styles.but
          }
          onClick={() =>
            onClick(questions[currentQuestion].resposta_e.is_correta)
          }
        >
          {questions[currentQuestion].resposta_e["descricao"]}
        </button>
      </div>
    </>
  );
};

export default QuestionBox;
