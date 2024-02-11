const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({
    name: String,
    gameType: String,
    description: String,

},{
    timestamps: true,
});

module.exports = mongoose.model('game', gameModel);