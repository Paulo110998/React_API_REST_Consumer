import axios from "axios";

// Confirando a padronização global da chamada da Api

// configurando a URL base
const dadosFetch= axios.create({
    baseURL: "https://localhost:7024",
    headers:{
        "Content-Type": "application/json",
    },

});

export default dadosFetch;