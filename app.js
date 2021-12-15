const express = require("express");
require("express-async-errors");

const { notFound, errorHandler } = require("./middleware");
const momRouter = require("./Routes/momRouter");
const cartRouter = require("./Routes/cartRouter");
const uploadRouter = require("./Routes/uploadRouter");
const stripeController = require("./controllers/stripeController");
const connect = require("./db/connect");
const fileUpload = require("express-fileupload");

const cloudinary = require("cloudinary");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(express.json(), express.urlencoded({ extended: false }))
  .use(fileUpload({ useTempFiles: true }))
  .use(express.static("./public"))
  .get("/", (req, res) => {
    res.send("Mom Market");
  })
  .use("/api/v1/mom", momRouter)
  .use("/api/v1/cart", cartRouter)
  .use("/api/v1/upload", uploadRouter)
  .post("/stripe", stripeController)
  .use(notFound);
// .use(errorHandler);
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`App listening at port ${port}`));
  } catch (err) {
    console.error(err);
  }
};

startServer();
