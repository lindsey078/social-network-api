const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// GET all thoughts & POST new thought
router.route('/')
  .get(getThoughts)     // GET /api/thoughts → Fetch all thoughts
  .post(createThought); // POST /api/thoughts → Create a thought

// GET one thought, PUT update thought, DELETE thought
router.route('/:thoughtId')
  .get(getThoughtById)  // GET /api/thoughts/:thoughtId → Fetch one thought
  .put(updateThought)   // PUT /api/thoughts/:thoughtId → Update thought
  .delete(deleteThought); // DELETE /api/thoughts/:thoughtId → Delete thought

// POST add reaction
router.route('/:thoughtId/reactions')
  .post(addReaction);   // POST /api/thoughts/:thoughtId/reactions → Add reaction

// DELETE remove reaction
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE /api/thoughts/:thoughtId/reactions/:reactionId → Remove reaction

module.exports = router;