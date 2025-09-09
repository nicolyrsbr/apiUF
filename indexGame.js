import express from 'express';
import {
    listarjogos, buscarPorId, buscarPorGenero, buscarPorPlataforma
} from './GameServico/servicoGames.js'


const app = express();


//Listar todos os jogos
app.get('/jogos', (req, res) => {
    const nomeGame = req.query.busca;
    
})


//Buscar por id
app.get('/jogos/:idgame', (req, res) => {
    const idGame = req.params.idgame;
    const game = buscarPorId(idGame);

    if (game) {
        res.json(game);
    } else if (isNaN(parseInt(req.params.idgame))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "Game não encontrada" });
    }
});

//Buscar por gênero
app.get('/jogos/:genero', (req, res) => {
    const generoGame = req.params.genero;
    const game = buscarPorGenero(generoGame);

    if(gamr) {
        res.json(game);
    } else {
        res.status(404).send({"erro": "Gênero não encontrado"});
    }
})


//Buscar por plataforma