import styles from "./editpost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useUpdateDocument } from "../../../hooks/useUpdateDocument";
import  { useFetchDocument } from "../../../hooks/useFetchDocument"

const EditPost = () => {
    const {id} = useParams()
    const { document: post } = useFetchDocument("posts", id);


    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)


        }
    }, [post])


    const {user} = useAuthValue();

    const {updateDocument, response} = useUpdateDocument("posts");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // validar a url da imagem
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa de uma URL.");
        }


        //checar todos os valores
        if(!title || !image || !body) {
            setFormError("Por favor, preencha todos os campos");
        }
        
        if (formError) return;

        const data = {
            title,
            image,
            body,
            uid: user.uid,
            createdBy: user.displayName
            
        }

       updateDocument(id, data);

       

        //redirect to home page
        navigate("/dashboard")

    };


    return (
        
        <div className={styles.edit_post}>
           {post && (
               <>
                <h1>Editando Post: {post.title}</h1>
            <p>Área para Alteração do conteúdo das histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input 
                        type="text"
                        name="text"
                        required
                        placeholder="Estrutura da História"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem</span>
                    <input 
                        type="text"
                        name="image"
                        required
                        placeholder="Insira a imagem que reprente seu post"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <p className={styles.preview_title}>Preview da imagem atual:</p>
                <img
                    className={styles.image_preview}
                    src={post.image}
                    alt={post.title}    
                 />
                <label>
                    <span>Conteúdo</span>
                    <textarea 
                    name="body" 
                    required 
                    placeholder="Insira o conteúdo"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    ></textarea>
                </label>
                {!response.loading && <button className="btn">Editar</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
            
            </form>
               </>
           )}
        </div>
        
        
        )
}

export default EditPost;