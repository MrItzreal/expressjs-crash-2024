const express = require("express");
const path = require("path");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, () => console.log(`Server running on port 8000`));

/* Express Static Middleware: Efficiently serve multiple static files (HTML, CSS, JavaScript, images, etc.) without needing to create individual routes for each file.

How it works?

1. Configuration: Use `app.use(express.static('public'))` to tell Express that your static files are located in the `public` directory.  
2. Automatic Serving:  Express automatically handles requests for files within the `public` directory. For example:
   - A request to `/` will serve `public/index.html`.
   - A request to `/about` will serve `public/about.html`.
   - A request to `/style.css` will serve `public/style.css`.
   
    When requesting a file, be sure to include its full name (e.g., `/about.html` not just `/about`). 
    */
