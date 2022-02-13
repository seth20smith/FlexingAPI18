const { User, Thought } = require('../models');

// const {
//     getAllUser,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser,
//   } = require('../../controllers/users-controller');



const UserController = {
    // get all 
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one  by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                // If no User is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    creatUser(req, res) {
        User.create(req.body)
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData)}
            )
            .catch(err => {
                res.status(500).json(err);
            });
},

    updateUser({ params }, res) { 
        User.findOneAndUpdate({ _id: req.params.id },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User to Update!' });
                return;
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    },


deleteUser({ params}, res) {
User.findOneAndDelete({ _id: req.params.id })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No User to Delete!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},




addANewFriend(req, res){
    User.findONeAndUpdate({_id: req.params.userId}, { $addToSet: { friends: req.params.friendId } }, {new: true})
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No User Found!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},


 deleteFriend(req, res){
    User.findONeAndUpdate({_id: req.params.userId}, { $addToSet: { friends: req.params.friendId } }, {new: true})
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No User Found!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},



}
module.exports = userController;