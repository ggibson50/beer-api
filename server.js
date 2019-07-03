const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/beerRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/beers',  {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to beers database');
});

mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to database:\n${error}`);
});

app.use('/beers', router);

app.use('/', (req, res) => {
    res.send('Hello!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))