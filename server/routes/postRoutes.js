const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
} = require("../controllers/postController");

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", protect, createPost);

router.put("/:id", protect, updatePost);

module.exports = router;