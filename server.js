const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(8000, () => console.log(`Server running on port 8000`));

/*Learned that if I change the scripts in my package.json and use:  "dev": "node --watch server.js" and run command "npm run dev" my server will auto-refresh without Nodemon npm package */

// res.sendFile() method is used to send the contents of a file as the HTTP response to a client's request.  It's particularly useful for serving static files like HTML pages, images, CSS stylesheets, or JavaScript files.

// While res.sendFile() is great for sending individual files, it can become cumbersome when you have many static pages to serve, as you'd need to create a separate route for each one. A better way is using Express Static Middleware.
