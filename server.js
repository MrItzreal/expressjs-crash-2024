const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
// You can add a fallback like || 8000 just in case.
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));

/*Since we are defining "/api/posts" in this file we do
not need to define it in posts.js file. We can define as:

- "/": only slash since .use() has the end point so no need to repeat.

- "/:id": just id portion since the path is already defined in .use().
*/
