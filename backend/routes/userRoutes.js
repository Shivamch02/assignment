const express = require("express");
const {
  register,
  login,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
// Add this route

module.exports = router;
