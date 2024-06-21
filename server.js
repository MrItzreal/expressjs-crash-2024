const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(8000, () => console.log(`Server running on port 8000`));

/*Learned that if I change the scripts in my package.json and use:  "dev": "node --watch server.js" and run command "npm run dev"*/
