import styles from "./createPost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useInsertDocument } from "../../../hooks/useInsertDocument";
import React, { Component } from "react";
import Select from "react-select";

const CreatePost = () => {
  const options = [
    { value: "historias", label: "História" },
    { value: "matematicas", label: "Matemática" },
    { value: "geografias", label: "Geografia" },
    { value: "portugueses", label: "Português" },
    { value: "ingleses", label: "Inglês" },
  ];
  const opcoesRespostaCorreta = [
    { value: 1, label: "Letra A" },
    { value: 2, label: "Letra B" },
    { value: 3, label: "Letra C" },
    { value: 4, label: "Letra D" },
    { value: 5, label: "Letra E" },
  ];

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imagensHistoria, setImagensHistoria] = useState([null]);
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");
  const [selectMateria, setSelectMateria] = useState("");
  const [selectQuizz, setSelectQuizz] = useState([
    {
      chave: 0,
      pergunta: "",
      resposta_a: { descricao: "", is_correta: false },
      resposta_b: { descricao: "", is_correta: false },
      resposta_c: { descricao: "", is_correta: false },
      resposta_d: { descricao: "", is_correta: false },
      resposta_e: { descricao: "", is_correta: false },
    },
  ]);

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument();

  const navigate = useNavigate();

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
    if (!title || !image || !body) {
      setFormError("Por favor, preencha todos os campos");
    }

    if (formError) return;

    insertDocument(
      {
        title,
        image,
        imagensHistoria,
        body,
        selectQuizz,
        uid: user.uid,
        createdBy: user.displayName,
      },
      selectMateria
    );

    //redirect to home page
    navigate("/");
  };

  const add = () => {
    setSelectQuizz((prevState) => [
      ...prevState,
      {
        chave: selectQuizz.length + 1,
        pergunta: "",
        resposta_a: { descricao: "", is_correta: false },
        resposta_b: { descricao: "", is_correta: false },
        resposta_c: { descricao: "", is_correta: false },
        resposta_d: { descricao: "", is_correta: false },
        resposta_e: { descricao: "", is_correta: false },
      },
    ]);
  };

  const addUrlImagem = () => {
    setImagensHistoria((prevState) => [...prevState, null]);
  };
  const remove = (chave) => {
    setSelectQuizz((prevState) =>
      prevState.filter((valor) => valor.chave !== chave)
    );
  };

  const handleInputChange = (chave, event) => {
    setSelectQuizz((prevState) => {
      const newState = prevState.map((valor) => {
        if (valor.chave === chave) {
          return {
            ...valor,
            [event.target.name]: {
              descricao: event.target.value,
              is_correta: valor[event.target.name].is_correta,
            },
          };
        }
        return valor;
      });
      return newState;
    });
  };

  const handleInputImagesHistoria = (index, valor) => {
    setImagensHistoria((prevState) => {
      prevState[index] = valor;
      return prevState;
    });
  };

  const handleInputStringChange = (chave, event) => {
    setSelectQuizz((prevState) => {
      const newState = prevState.map((valor) => {
        if (valor.chave === chave) {
          return {
            ...valor,
            [event.target.name]: event.target.value,
          };
        }
        return valor;
      });
      return newState;
    });
  };

  return (
    <div className={styles.create_post}>
      <h1>Criar Post</h1>
      <p>Área para criação das histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <Select
            options={options}
            onChange={(e) => setSelectMateria(e.value)}
          />
        </label>
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
        <label>
          {imagensHistoria.map((valor, index) => (
            <div key={index}>
              <input
                type="text"
                name="image"
                required
                placeholder="Insira a imagem que represente seu post"
                onChange={(e) =>
                  handleInputImagesHistoria(index, e.target.value)
                }
                value={valor}
              />
            </div>
          ))}
          <button onClick={addUrlImagem} className="butao">
            Adicionar
          </button>
        </label>
        <label>
          {selectQuizz.map((valor, index) => (
            <div key={valor.chave}>
              <input
                type="text"
                placeholder="Pergunta?"
                name="pergunta"
                value={valor.pergunta}
                onChange={(event) =>
                  handleInputStringChange(valor.chave, event)
                }
              />
              <input
                type="text"
                placeholder="Letra A"
                name="resposta_a"
                value={valor.resposta_a.descricao}
                onChange={(event) => handleInputChange(valor.chave, event)}
              />
              <input
                type="text"
                placeholder="Letra B"
                name="resposta_b"
                value={valor.resposta_b.descricao}
                onChange={(event) => handleInputChange(valor.chave, event)}
              />
              <input
                type="text"
                placeholder="Letra C"
                name="resposta_c"
                value={valor.resposta_c.descricao}
                onChange={(event) => handleInputChange(valor.chave, event)}
              />
              <input
                type="text"
                placeholder="Letra D"
                name="resposta_d"
                value={valor.resposta_d.descricao}
                onChange={(event) => handleInputChange(valor.chave, event)}
              />
              <input
                type="text"
                placeholder="Letra E"
                name="resposta_e"
                value={valor.resposta_e.descricao}
                onChange={(event) => handleInputChange(valor.chave, event)}
              />
              <label>
                <Select
                  options={opcoesRespostaCorreta}
                  onChange={(e) => {
                    valor.resposta_a.is_correta = false;
                    valor.resposta_b.is_correta = false;
                    valor.resposta_c.is_correta = false;
                    valor.resposta_d.is_correta = false;
                    valor.resposta_e.is_correta = false;
                    switch (e.value) {
                      case 1:
                        valor.resposta_a.is_correta = true;
                        break;
                      case 2:
                        valor.resposta_b.is_correta = true;
                        break;
                      case 3:
                        valor.resposta_c.is_correta = true;
                        break;
                      case 4:
                        valor.resposta_d.is_correta = true;
                        break;
                      case 5:
                        valor.resposta_e.is_correta = true;
                        break;
                      default:
                        break;
                    }
                  }}
                />
              </label>

              <button onClick={() => remove(valor.chave)} className="delete">
                Delete
              </button>
            </div>
          ))}

          <button onClick={add} className="butao">
            Adicionar
          </button>
        </label>

        {!response.loading && <button className="btn">Criar post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
