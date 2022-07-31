import styles from './home.module.css'
import corujas from '../../img/coruja-cinza.svg'


function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Revisa+</span></h1>
            <p>Comece a revisar seus conteúdos escolares agora mesmo!</p>
            <img src={corujas} alt="Corujas" />
        </section>
    )
}

export default Home