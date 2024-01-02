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
  const [imagemSerie, setImagemSerie] = useState();
  const [tituloSerie, setTituloSerie] = useState();
  const [temporadas, setTemporadas] =  useState()
  const [episodios, setEpisodios] = useState()
  const [sinopse, setSinopse] = useState()

  // Função que atualiza o estado com o arquivo selecionado 
  const estadoDaImagem = (e) => {
    const file = e.target.value;
    setImagemSerie(file);
  };
  
  /* função envia os dados do formulário para o servidor 
  usando o dadosFetch.post método. */
  const createPost = async (e) => {
    // eliminando o carregamento na mesma página, ao dar o submit
    e.preventDefault();
     
    /*
    Os dados do formulário são construídos usando FormData
    para lidar com o upload do arquivo de imagem.
    */ 
    const serie = {imagemSerie, tituloSerie, temporadas, episodios, sinopse};   
    
    try {
      /* O Content-Type cabeçalho está definido como 
      multipart/form-datapara indicar um upload de arquivo. */
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
        
        <div className="form-control">
          <label htmlFor="img">Imagem: </label>
          <input type="file" 
          name="imagemSerie"
          id="imagemSerie"
          accept="image/png, image/jpeg"
          onChange={(e) => setImagemSerie(e.target.value)}

          />
          
        </div>
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