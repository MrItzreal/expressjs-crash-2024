import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
// You can add a fallback like || 8000 just in case.
const port = process.env.PORT || 8000;

const app = express();

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error Handlers
// Placed below the routes to avoid conflicts.
app.use(notFound);
app.use(errorHandler);
 
app.listen(port, () => console.log(`Server running on port ${port}`));

/* Body parser middleware:
-express.json(): This lets you submit raw JSON data. You can see it using POSTMAN.

-express.urlencoded({ extended: false })): This allows you to send the form data.You can see it using POSTMAN.*/

/*Since we are defining "/api/posts" in this file we do not need to define it in posts.js file. We can define as:

- "/": only slash since .use() has the end point so no need to repeat.

- "/:id": just id portion since the path is already defined in .use().
*/
