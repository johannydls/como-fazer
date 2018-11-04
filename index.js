const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let i = 0;

app.get('/', (request, response) => {
    i++;
    response.send(`<h1>Hello Fullstack Lab: ${i} </h1>`);
});

app.listen(port, (err) => {
    if (err) console.log("Erro:", err);
    else console.log("Server running on http://localhost:" + port);
});