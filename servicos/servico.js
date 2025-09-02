import colecaoUf from "../dados/dados.js";

//Retorna toda coleção
export const buscarUfs = () => {
    return colecaoUf;
}

//Busca Uf pelo nome
export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

//Retorna o id especificado
export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}