const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api = require('./api');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());

const port = process.env.PORT || 3000;

app.get('/', async (request, response) => {
    console.log("[NEW REQUEST]: GET / 200 OK");
    const content = await api.list('teste');
    response.render('index', {
        i: content.data
    });
});

app.get('/categorias/nova', (req, res) => {
    res.render('categorias/nova')
});

app.post('/categorias/nova', async (req, res) => {
    await api.create('categorias', { categoria: req.body.categoria });
    res.redirect('/categorias');
})

app.get('/categorias', async (req, res) => {
    const categorias = await api.list('categorias');
    res.render('categorias/index', { categorias });
});

app.get('/categorias/excluir/:id', async (req, res) => {
    await api.apagar('categorias', req.params.id);
    res.redirect('/categorias');
})


app.get('/categorias/editar/:id', async(req, res) => {
    const categoria = await api.get('categorias', req.params.id);
    res.render('categorias/editar', { categoria });
});

app.post('/categorias/editar/:id', async (req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    });
    res.redirect('/categorias');
})

app.listen(port, (err) => {
    if (err) console.log("Erro:", err);
    else console.log("Server running on http://localhost:" + port);
});