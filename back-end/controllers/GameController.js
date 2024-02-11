const gameModel = require('../models/GameModel');

const GameController = {
    // Create a new game
    createNewGame: async (req, res)=>{
        try{
            const newGame = await gameModel.create(req.body);
            res.status(200).json(newGame);
            //delete this line before deploying in production environment
            console.log("New game created: "+newGame);  
        }catch(error){
            console.error("createNewGame API error: "+error);
            res.status(500).json({message: "Error catched when creating a new game"});
        }
    },
    // Get all games
    getAllGames: async (req, res)=>{
        try{
            const allGames = await gameModel.find();
            res.status(200).json(allGames);
            //delete this line before deploying in production environment
            console.log("All games: "+allGames);
        }catch(error){
            console.error("getAllGames API error: "+error);
            res.status(500).json({message: "Error catched when getting all games"});
        }
    },
    // Get a game by id
    getGameById: async (req, res)=>{
        try{
            const gameById = await gameModel.findById(req.params.id);
            res.status(200).json(gameById);
            //delete this line before deploying in production environment
            console.log("Game by id: "+gameById);
        }catch(error){
            console.error("getGameById API error: "+error);
            res.status(500).json({message: "Error catched when getting game by id"});
        }
    },
    // Update a game by id
    updateGameById: async (req, res)=>{
        try{
            const updatedGame = await gameModel.findByIdAndUpdate
            (req.params.id, req.body, {new: true});
            res.status(200).json(updatedGame);
            //delete this line before deploying in production environment
            console.log("Game updated: "+updatedGame);
        }catch(error){
            console.error("updateGameById API error: "+error);
            res.status(500).json({message: "Error catched when updating game by id"});
        }
    },
    // Delete a game by id
    deleteGameById: async (req, res)=>{
        try{
            const deletedGame = await gameModel.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedGame);
            //delete this line before deploying in production environment
            console.log("Game deleted: "+deletedGame);
        }catch(error){
            console.error("deleteGameById API error: "+error);
            res.status(500).json({message: "Error catched when deleting game by id"});
        }
    }

};

module.exports = GameController;