import styles from "../../Quizzes/quizz.module.css";

const QuestionBox = ({ currentQuestion, questions, onClick }) => {
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
          className={styles.but}
          onClick={() =>
            onClick(questions[currentQuestion].resposta_a.is_correta)
          }
        >
          {questions[currentQuestion].resposta_a.descricao}
          essa é uma questão
        </button>
        <button
          className={styles.but}
          onClick={() =>
            onClick(questions[currentQuestion].resposta_b.is_correta)
          }
        >
          {questions[currentQuestion].resposta_b["descricao"]}
          essa é uma questão
        </button>
      </div>
    </>
  );
};

export default QuestionBox;
