import colecaoGames from "../GameDados/dadosGames";

//Listar todos os jogos
export const listarjogos = () => {
    return colecaoGames;
}

//Buscar jogo por id
export const buscarPorId = (id) => {
    const idGame = parseInt(id);
    return colecaoGames.find(game => game.id === idGame);
}

//Buscar jogos por gênero
export const buscarPorGenero = (generoGame) => {
    return colecaoGames.find(genero => game.genero.toLowerCase() === generoGame.toLowerCase());
}

//Buscar jogos por plataforma
export const buscarPorPlataforma = (plataformaGame) => {
    return colecaoGames.find(plataformas => game.platafomras.toLowerCase() === plataformaGame.toLowerCase());
}
