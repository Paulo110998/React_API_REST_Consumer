import dadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NewPost.css";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [tituloSerie, setTituloSerie] = useState("");
  const [temporadas, setTemporadas] = useState(0);
  const [episodios, setEpisodios] = useState(0);
  const [sinopse, setSinopse] = useState("");

 // EditPost.jsx
  useEffect(() => {
  // Carregar os dados da série para edição ao montar o componente
  const fetchPostData = async () => {
    try {
      if (!id) {
        console.error("ID não está definido.");
        return;
      }

      const response = await dadosFetch.get(`/series/${id}`);
      const serieData = response.data;

      // Atualizar os estados com os dados da série
      setTituloSerie(serieData.tituloSerie);
      setTemporadas(serieData.temporadas);
      setEpisodios(serieData.episodios);
      setSinopse(serieData.sinopse);
    } catch (error) {
      console.error("Erro na requisição GET:", error);
    }
  };

  fetchPostData();
}, [id]);

  

  const updatePost = async (e) => {
    e.preventDefault();
  
    // Verificar se id é undefined ou null
    if (!id) {
      console.error("ID não definido para atualização.");
      // Tratar de maneira apropriada, como redirecionar para a página inicial
      navigate("/");
      return;
    }
  
    const updatedSerie = { tituloSerie, temporadas, episodios, sinopse };
  
    try {
      await dadosFetch.put(`/series/${id}`, updatedSerie);
  
      // Redirecionar após a atualização do post (ou realizar qualquer outra ação desejada)
      navigate("/");
    } catch (error) {
      console.error("Erro na requisição PUT:", error);
    }
  };
  

  return (
    <div className="edit-post">
      <h2>Editar Série</h2>
      <form onSubmit={(e) => updatePost(e)}>
        {/* Campos de formulário para edição */}
        {/* ... (os mesmos campos que você já tem) */}
        <div className="form-control">
          <label htmlFor="tituloSerie">Título:</label>
          <input
            type="text"
            name="tituloSerie"
            id="tituloSerie"
            placeholder="Digite o título"
            value={tituloSerie}
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
           value={temporadas}
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
           value={episodios}
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
           value={sinopse}
           onChange={(e) => setSinopse(e.target.value)}
           />
        </div>
        
        <input type="submit" value="Atualizar Série" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
