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

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

/* .send() vs .json():
- res.send(): Use this if you need flexibility and might send different types of data in your responses such as:strings, objects, arrays, or even buffers. .

- res.json(): Use this when you are specifically dealing with JSON data (objects or arrays) to ensure the correct content type and make your code more intention-revealing.
*/
