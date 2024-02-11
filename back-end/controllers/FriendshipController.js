const friendshipModel = require('../models/FriendshipModel');

const FriendshipController = {
    //add a new friend
    addNewFriend: async (req, res) => {
        try{
            const userId = req.body.id;
            const friendId = req.body.friendId;
            const user = await friendshipModel.findOne({user: userId});
            if(user){
                user.friend.push(friendId);
                await user.save();
                console.log(user);
                res.status(200).json({message: 'Friend added'});
            }
            else{
                res.status(404).json({message: 'User not found'});
            }
        }catch(error){
            console.error("addNewFriend API error: "+error);
            res.status(500).json({message: "Error catched when add a new friend"});
        }
    },
};