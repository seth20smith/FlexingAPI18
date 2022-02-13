// const { User, Thought } = require('../models');
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addANewReaction,
    deleteReaction,
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

router
  .route('/:id/reactions')
  .post(addANewReaction)

router
  .route('/:id/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;