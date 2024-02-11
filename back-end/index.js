//import local environment variables
require('dotenv').config();

//import express
const express = require('express');
const app = express();

const port = process.env.PORT;
const mongodb_url = process.env.MONGODB_URL;

//import mongoose
const mongoose = require('mongoose');
mongoose.connect(mongodb_url, {useNewUrlParser: true, useUnifiedTopology: true});

//check for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    }
);

//import routes
// const userRouter = require('./api/user');
// const gameRecordRouter = require('./api/gameRecord');
// const friendshipRouter = require('./api/friendship');


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Games-With-Friends app listening at http://localhost:${port}`);
    }
);

