const express = require("express");
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

module.exports = router;

/* Changed "app."" to "router."" because app is defined on server.js, whereas, router is defined on this file.

Notes: 
-Make sure to export the file since we are using the common js for now: module.exports = router.

-READ comments on server.js regarding "/" & "/:id"
*/
