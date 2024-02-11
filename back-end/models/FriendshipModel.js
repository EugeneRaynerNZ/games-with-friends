const mongoose = require('mongoose');

const friendshipModel = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    friend:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
},{
    timestamps: true,
});

module.exports = mongoose.model('friendship', friendshipModel);