import colors from "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "yellow",
    PUT: "blue",
    DELETE: "red",
  };

  const color = methodColors[req.method] || white;

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;

/* Logger Middleware: These functions access req & res objects as they process incoming requests and responses. 

A logger can be implemented at a Route level: Which are passed as 2nd arguments to be used and will only be called where placed ex:
router.post("/",logger, (req, res) => {....rest of code}

OR App level by wrapping the log function: app.use(logger);
*/
