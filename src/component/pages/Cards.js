import styles from "./cards.module.css";
import Card from "./Card"
import historia from '../../img/historia.jpg'
import matematica from '../../img/matematica.jpg'
import portugues from '../../img/Portugues.jpg'
import ingles from '../../img/ingles.png'
import geografia from '../../img/Geografia.jpg'



function Cards() {
    return (
    
      <div className={styles.wrapper}>
        <Card
          img={historia}
          title="História"
          description="Histórias em primeira pessoa sobre os conteúdos do Brasil"
          route='/conteudos?disciplina=historias'
        />
  
        <Card
          img={matematica}
          title="Matemática"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
          route='/conteudos?disciplina=matematicas'
        />
  
        <Card
          img={portugues}
          title="Português"
          description="Baked Cod with Vegetables. 30 minute meal!"
          route='/conteudos?disciplina=portugueses'
        />
         <Card
          img={geografia}
          title="Geografia"
          description="Baked Cod with Vegetables. 30 minute meal!"
          route='/conteudos?disciplina=geografias'
        />
         <Card
          img={ingles}
          title="Inglês"
          description="Baked Cod with Vegetables. 30 minute meal!"
          route='/conteudos?disciplina=ingleses'
        />
     
      </div>
     
    );
  }

  export default Cards;