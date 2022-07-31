import styles from "./post.module.css";

//Hooks
import { useParams, useSearchParams } from "react-router-dom";
import { useFetchDocument } from "../../../hooks/useFetchDocument";

//Quizz
import Quizz from "../../Quizzes/Quizz";

const Post = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("disciplina"));
  const { document: post, loading } = useFetchDocument(
    searchParams.get("disciplina"),
    id
  );

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <Quizz perguntas={post.selectQuizz} />
        </>
      )}
    </div>
  );
};

export default Post;
