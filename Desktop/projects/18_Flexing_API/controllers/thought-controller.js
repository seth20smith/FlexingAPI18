const { Thought, User } = require('../models');


// const {
//     getAllThought,
//     getThoughtById,
//     createThought,
//     updateThought,
//     deleteThought
//   } = require('../../controllers/thought-controller');




const thoughtController = {
    // get all 
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one  by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                // If no Thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData)}
            )
            .catch(err => {
                res.status(500).json(err);
            });
},

    updateThought({ params }, res) { 
        Thought.findOneAndUpdate({ _id: req.params.id },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No Thought to Update!' });
                return;
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    },


deleteThought({ params}, res) {
Thought.findOneAndDelete({ _id: req.params.id })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No Thought to Delete!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},




addANewReaction(req, res){
    Thought.findONeAndUpdate({_id: req.params.thoughtId}, { $addToSet: { reactions: req.params.reactionId } }, {new: true})
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No Thought Found!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},


 deleteReaction(req, res){
    Thought.findONeAndUpdate({_id: req.params.thoughtId}, { $addToSet: { reactions: req.params.reactionId } }, {new: true})
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No Thought Found!' });
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
},



}
module.exports = thoughtController;