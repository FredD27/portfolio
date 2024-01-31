const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

const { authMiddleware } = require("./middlewares/auth.middlewares");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/users", userControllers.getUsers);
router.get("/users/me", authMiddleware, userControllers.getProfile);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/users", userControllers.postUser);
router.post("/login", userControllers.postLogin);

/* ************************************************************************* */

module.exports = router;
