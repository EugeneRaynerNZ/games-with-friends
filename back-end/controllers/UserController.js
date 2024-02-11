const userModel = require('../models/UserModel');

const UserController = {
    //Create a new user
    createNewUser: async (req, res)=>{
        try{
            const newUser = await userModel.create(req.body);
            res.status(200).json(newUser);
            //delete this line before deploying in production environment
            console.log("New user created: "+newUser);  
        }catch(error){
            console.error("createNewUser API error: "+error);
            res.status(500).json({message: "Error catched when creating a new user"});
        }
    },
    //Get all users
    getAllUsers: async (req, res)=>{
        try{
            const allUsers = await userModel.find();
            res.status(200).json(allUsers);
            //delete this line before deploying in production environment
            console.log("All users: "+allUsers);
        }catch(error){
            console.error("getAllUsers API error: "+error);
            res.status(500).json({message: "Error catched when getting all users"});
        }
    },
    //Get a user by id
    getUserById: async (req, res)=>{
        try{
            const userById = await userModel.findById(req.params.id);
            res.status(200).json(userById);
            //delete this line before deploying in production environment
            console.log("User by id: "+userById);
        }catch(error){
            console.error("getUserById API error: "+error);
            res.status(500).json({message: "Error catched when getting user by id"});
        }
    },
    //Update a user by id
    updateUserById: async (req, res)=>{
        try{
            const updatedUser = await userModel.findByIdAndUpdate
            (req.params.id, req.body, {new: true});
            res.status(200).json(updatedUser);
            //delete this line before deploying in production environment
            console.log("User updated: "+updatedUser);
        }catch(error){
            console.error("updateUserById API error: "+error);
            res.status(500).json({message: "Error catched when updating user by id"});
        }
    },
    //Delete a user by id
    deleteUserById: async (req, res)=>{
        try{
            const deletedUser = await userModel.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedUser);
            //delete this line before deploying in production environment
            console.log("User deleted: "+deletedUser);
        }catch(error){
            console.error("deleteUserById API error: "+error);
            res.status(500).json({message: "Error catched when deleting user by id"});
        }
    },
};

module.exports = UserController;