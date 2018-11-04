const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('<h1>Hello Fullstack Lab</h1>');
});

app.listen(port, (err) => {
    if (err) console.log("Erro:", err);
    else console.log("Server running on http://localhost:" + port);
});