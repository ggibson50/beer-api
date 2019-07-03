const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');

router.post('/', (req, res) => {
    let beer = new Beer();
    beer.name = req.body.name;
    beer.rating = req.body.rating;
    beer.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`Saved: ${document}`)
        }
    });
});

router.get('/', (req, res) => {
    Beer.find((err, beers) => {
        if (err) {
            res.send(err);
        } else {
            res.json(beers)
        }
    })
});

router.get('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err) res.send(err);
        else res.json(beer);
    }) 
});

router.get('/', (req, res) => {
    res.send('Router is functional')
});

module.exports = router;