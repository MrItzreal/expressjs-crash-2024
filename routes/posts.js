import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// GET REQUEST
// Get all posts
// You can chain on the .status() w/ .json() by adding a dot in between.
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// POST REQUEST
// Create new post
router.post("/", createPost);

// PUT REQUEST
// Update Post
// "/:id" added to identify updated post.
router.put("/:id", updatePost);

// DELETE REQUEST
// Delete Post
router.delete("/:id", deletePost);

export default router;

/* 
Since we don't have a DB, the POST request will still create a new post, but it will disappear when the server restarts.

Changed "app."" to "router."" because app is defined on server.js, whereas, router is defined on this file.

-READ comments on server.js regarding "/" & "/:id"
*/
