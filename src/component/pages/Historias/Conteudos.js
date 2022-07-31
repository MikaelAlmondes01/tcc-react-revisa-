//css
import styles from "./conteudos.module.css";


//Hooks
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments"

//components
import PostDetail from "../../layout/PostDetail";




const Conteudos = () => {
    const [searchParams] = useSearchParams();
    const {documents: posts, loading} = useFetchDocuments(searchParams.get("disciplina"))

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    
    return (
        <div className={styles.home}>
            <h1>Veja as historias mais recentes</h1>
            
            <div>
                {loading && <p>Carregando ...</p>}
                {posts && posts.map((post) => <PostDetail key={post.id} disciplina={searchParams.get("disciplina")} post={post}/>)}
                
                
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts</p>    
                        <Link to="/createpost" className="btn">
                        Criar o primeiro post
                        </Link>
                    </div>
                )}
            </div>          
        </div>

        );
}

export default Conteudos;