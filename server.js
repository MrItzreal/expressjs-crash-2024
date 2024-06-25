import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
// You can add a fallback like || 8000 just in case.
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// setup static folder that lead to both our HTML files.
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error Handlers
// Placed below the routes to avoid conflicts.
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));

/*These paths are incompatible with ES Modules and will cause errors if used outside of common modules. However, you can make your own using variables and methods as shown above:
__filename: gives both path & file name
__dirname: only gives the path
 console.log(__filename, __dirname);

 path.join(): Joins arguments together which results in a path.
*/
