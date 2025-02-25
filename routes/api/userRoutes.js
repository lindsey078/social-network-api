const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// GET all users & POST new user
router.route('/')
  .get(getUsers)       // GET /api/users → Fetch all users
  .post(createUser);   // POST /api/users → Create a user

// GET one user, PUT update user, DELETE user
router.route('/:userId')
  .get(getUserById)    // GET /api/users/:userId → Fetch single user
  .put(updateUser)     // PUT /api/users/:userId → Update user
  .delete(deleteUser); // DELETE /api/users/:userId → Delete user

// POST add friend, DELETE remove friend
router.route('/:userId/friends/:friendId')
  .post(addFriend)     // POST /api/users/:userId/friends/:friendId → Add friend
  .delete(removeFriend); // DELETE /api/users/:userId/friends/:friendId → Remove friend

module.exports = router;