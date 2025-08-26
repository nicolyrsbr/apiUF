import colecaoAl from "./alfabeto/alfabeto.js"
import express from 'express';

const app = express();

app.get('/alfs', (req, res) => {
    res.json(colecaoAl);
});


app.get('/alfs/:idal', (req, res) => {
    const idAl = parseInt(req.params.idal);
    let mensagemErro = '';
    let nome;

    if (!(isNaN(idAl))) {
        nome = colecaoAl.find(u => u.id === id);
        if (!nome) {
            mensagemErro = 'Letra não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (nome) {
        res.json(nome);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }
});


app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});
