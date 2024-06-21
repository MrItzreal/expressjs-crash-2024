const express = require("express");
const path = require("path");

// You can add a fallback like || 8000 just in case.
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

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
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get single post

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

/* 
parseInt: converts strings into integers.
Intergers: whole numbers like: -1,0 & 1.

req.params is an object that stores values extracted from the URL based on route parameters defined in your routes. Route parameters are segments of the URL that are dynamic and can change based on user input.
*/
