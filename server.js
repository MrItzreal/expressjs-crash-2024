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
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

/* "Get all posts" function demonstrates input sanitization by converting user-provided data into a specific type (integer) and checking its validity before using it, preventing potential errors and security risks.

SQL Injections are DANGEROUS! 
-attackers can exploit SQL injection to gain unauthorized access to your entire database.
-Manipulate Data: can modify and delete data.
-Denial of Service: can make your site unresponsive and crash.
-Server Compromise: might breach your server.
 */

/*req.query is an object that contains the query parameters of an HTTP request. Query parameters are key-value pairs appended to the end of a URL after a question mark (?). They are used to send additional data to the server along with the request. 

https://www.example.com/search?query=expressjs&page=2

query=expressjs and page=2 are query parameters.
query and page are the keys.
expressjs and 2 are the corresponding values.
*/

// query parameters are typically strings, even if you intend them to be numbers.Thus why parseInt() is important to use.
