import express from "express";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
];

// GET REQUEST
// Get all posts
// You can chain on the .status() w/ .json() by adding a dot in between.
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }
  res.status(200).json(post);
});

// POST REQUEST
// Create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// PUT REQUEST
// Update Post
// "/:id" added to identify updated post.
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// DELETE REQUEST
// Delete Post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;

/* 
Since we don't have a DB, the POST request will still create a new post, but it will disappear when the server restarts.

Changed "app."" to "router."" because app is defined on server.js, whereas, router is defined on this file.

-READ comments on server.js regarding "/" & "/:id"
*/
