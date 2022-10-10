import styles from "./post.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  //Carrossel
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>

          <div className={styles.container}>
            <Slider {...settings}>
              <img
                className={styles.imagem}
                src={post.imagensHistoria[0]}
                alt={post.title}
              />
              <img
                className={styles.imagem}
                src={post.imagensHistoria[1]}
                alt={post.title}
              />
              <img
                className={styles.imagem}
                src={post.imagensHistoria[2]}
                alt={post.title}
              />
              <img
                className={styles.imagem}
                src={post.imagensHistoria[3]}
                alt={post.title}
              />
              <img
                className={styles.imagem}
                src={post.imagensHistoria[4]}
                alt={post.title}
              />
            </Slider>
          </div>
          <div>{post.body}</div>
          <Quizz perguntas={post.selectQuizz} />
        </>
      )}
    </div>
  );
};

export default Post;
