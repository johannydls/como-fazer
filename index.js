const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

let i = 0;

app.get('/', (request, response) => {
    console.log("[NEW REQUEST]: GET / 200 OK");
    i++
    response.render('index', {i: i});
});

app.listen(port, (err) => {
    if (err) console.log("Erro:", err);
    else console.log("Server running on http://localhost:" + port);
});