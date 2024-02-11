const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    games: {type: mongoose.Schema.Types.ObjectId, ref: 'game'},
},{
    timestamps: true,
});

module.exports = mongoose.model('user', userModel);
