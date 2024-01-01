// Configuração global da chamada da API
import dadosFetch from "../axios/config"

// Responsável por gerenciar os valores dos inputs
import { useState } from "react"

// Sumula um redirect quando o usuário adiciona um post
import { useNavigate } from "react-router-dom"

import "./NewPost.css"

const NewPost = () => {
  const navigate = useNavigate();
  
  // Gerenciando o estado dos inputs
  const [tituloSerie, setTituloSerie] = useState();
  const [temporadas, setTemporadas] =  useState()
  const [episodios, setEpisodios] = useState()
  const [sinopse, setSinopse] = useState()
  
  // Função que dispara quando o formulário for enviado
  const createPost = async (e) => {
    // eliminando o carregamento na mesma página, ao dar o submit
    e.preventDefault();
    
    // Criando um novo objeto serie
    const serie = { tituloSerie, temporadas, episodios, sinopse };
  
    try {
      // usando o seriesFetch da chamada global de API e usando o método http "post"
      await dadosFetch.post("/series", serie);
  
      // Redirecione após a criação do post (ou realiza qualquer outra ação desejada)
      navigate("/");
    } catch (error) {
      console.error("Erro na requisição POST:", error);
    }
  };
  

  return (
    <div className='new-post'>
      <h2>Cadastrar Série</h2>
      <form onSubmit={(e)=> createPost(e)}>
        <div className='form-control'>
          <label htmlFor="tituloSerie">Título:</label>
          <input
           type="text" 
           name='tituloSerie'
           id="tituloSerie"
           placeholder='Digite o título'
           onChange={(e) => setTituloSerie(e.target.value)}
           />

        </div>
        <div className='form-control'>
        <label htmlFor="temporadas">Temporadas:</label>
          <input
           type="number" 
           name='temporadas'
           id="temporadas"
           placeholder='Digite o número de'
           onChange={(e) => setTemporadas(e.target.value)}
           />
        </div>
        <div className='form-control'>
          <label htmlFor="episodios">Média de minutos para cada episódio:</label>
          <input
           type="number" 
           name='episodios'
           id="episodios"
           placeholder='Média de min - EPS'
           onChange={(e) => setEpisodios(e.target.value)}
           />
        </div>
        <div className='form-control'>
          <label htmlFor="sinopse">Sinopse:</label>
          <input
           type="text" 
           name='sinopse'
           id="sinopse"
           placeholder='Digite a sinopse'
           onChange={(e) => setSinopse(e.target.value)}
           />
        </div>
        <input type="submit" value="criar serie" className='btn'  />
      </form>
    </div>
  )
}

export default NewPost