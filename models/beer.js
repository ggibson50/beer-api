const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  BeerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: [0, 'Rating must be 0 or above'],
        max: [10, 'Rating must be 10 or less'], 
        required: true,
    }
});

module.exports = mongoose.model('Beer', BeerSchema);