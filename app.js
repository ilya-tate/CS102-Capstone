const express = require("express");
require("express-async-error");

const { notFound, errorHandler } = require("./middleware");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(express.json())
  .use(express.static("./public"))
  .get("/", (req, res) => {
    res.send("Mom Market");
  })
  .use(notFound)
  .use(errorHandler);

try {
  app.listen(port, console.log(`Listening @ ${port}...`));
} catch (error) {
  console.error(error);
}
