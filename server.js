const express = require('express');
const app = express();
const router = require('./routes/beerRouter');

app.get('/beers', router);

app.get('/dogs', (req, res) => {
    res.send(`Here's a dog!`);
});

app.delete('/dogs', (req, res) => {
    res.send(`Deleted a dog!`);
});

app.use('/', (req, res) => {
    res.send('Hello!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))