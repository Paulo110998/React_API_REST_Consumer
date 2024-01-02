// Configuração global da chamada da API
import dadosFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Homepage.css"


const Homepage = () => {
  
  // SERIES

  // Criando o estado com useState e duas variáveis 'posts e setPosts'
  const [series, setSeries] = useState([])
  // Resgatando os dados através de uma função assíncrona
  const getDadosSeries = async() =>{  
    try {
      // Chamando o ENDPOINT através do seriesFetch
      const response = await dadosFetch.get("/series");
      const data = response.data;
      setSeries(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => { 
    getDadosSeries()


  }, [])

  //FILMES
  const [filmes, setFilmes] = useState([])
  
  const getDadosFilmes = async() =>{
    try {
      const responseFilme = await dadosFetch.get("/filmes");
      const data = responseFilme.data;
      setFilmes(data);
      
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getDadosFilmes()
  }, [])



  return (
    <div className="homepage">
      <div>
        <h1>Filmes</h1>
        {filmes.length === 0 ? <p>carregando...</p> : (
          filmes.map((filme) => (
            <div className="filme" key={filme.id}>
              <br />
              <h2>{filme.titulo}</h2>
              <p>Gênero: {filme.genero}</p>
              <p>Duração: {filme.duracao} min</p>
              <p>Você consultou: {filme.horaDaConsulta}</p>
              <br />
              <Link to={`/filmes/${filme.id}`} className="btn">Ler mais</Link>
            </div>
          ))
        )}

        
      </div>
      <div>
      <h1>Séries</h1>
      {/* Se filmes for == vazio fica carregando, senão buscaremos os dados da API */}
      {series.length === 0 ? <p>Carregando..</p> : (
        series.map((serie) => (
          <div className="serie" key={serie.id} >
            <br />
            <img alt="" />
            <h2>{serie.tituloSerie}</h2>
            <p>Temporadas: {serie.temporadas}</p>
            <p>Cadas episódio tem {serie.episodios}min</p>
            <p>{serie.id}</p>
            <Link to={`/editar/${serie.id}`} className="btn">Editar</Link>
          
            {/* Criando uma rota específica para cada serie através do id */}
            <Link to={`/series/${serie.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
      </div>
      
     

    </div>
  )
}

export default Homepage