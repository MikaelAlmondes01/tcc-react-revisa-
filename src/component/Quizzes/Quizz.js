import { useState } from "react";
import styles from "./quizz.module.css";

//components
import Score from "../questions/score";
import QuestionBox from "../questions/question-box";

function Quizz(props) {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRespondeu, setIsRespondeu] = useState(false);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsRespondeu(true);
    setTimeout(function () {
      setIsRespondeu(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < props.perguntas.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 2000);
  }

  return (
    <div className={styles.app}>
      {showScore ? (
        <Score score={score} questions={props.perguntas} />
      ) : (
        <QuestionBox
          isRespondeu={isRespondeu}
          currentQuestion={currentQuestion}
          questions={props.perguntas}
          onClick={(isCorrect) => handleAnswer(isCorrect)}
        />
      )}
    </div>
  );
}

export default Quizz;
