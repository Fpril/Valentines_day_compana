const express = require('express');
const { env } = require('process');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(env.PORT || 8080, () => {
    console.log(`port: ${env.PORT || 8080}`);
});