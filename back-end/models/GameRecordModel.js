const mongoose = require('mongoose');

const gameRecordsModel = new mongoose.Schema({
    game: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    score: Number,
},{
    timestamps: true,
});

module.exports = mongoose.model('gameRecord', gameRecordsModel);