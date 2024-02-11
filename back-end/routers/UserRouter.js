const router = require('express').Router();
const userController = require('../controllers/UserController');

//create a new user
router.post('/create', userController.createNewUser);
//get all users
router.get('/all', userController.getAllUsers);
//get a user by id
router.get('/:id', userController.getUserById);
//update a user by id
router.put('/update/:id', userController.updateUserById);
//delete a user by id
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;