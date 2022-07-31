
import styles from './card.module.css'

import {  useNavigate } from "react-router-dom";


function Card(props) {

  const navigate = useNavigate();

  const navigateTo = () => {
    // 👇️ navigate to /
    navigate(props.route);
  };

 
  
    return (
      <div className={styles.card}>
        <div className={styles.body}>
          <img src={props.img} alt="Imagens" className={styles.img} />
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
        <button className={styles.button} onClick={navigateTo}>Acessar</button>
        
      </div>
    );
  }

  export default Card
  