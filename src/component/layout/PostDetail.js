
import styles from "./postDetail.module.css"

import { Link } from 'react-router-dom'


const PostDetail = ({post, disciplina}) => {
    return (
        <div className={styles.post_detail}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className={styles.createdby}>{post.createdBy}</p>
            <Link to={`/conteudos/visualizar/${post.id}?disciplina=${disciplina}`} className="btn btn-outline">
                Ler
            </Link>
        </div>
        
        )
}

export default PostDetail;