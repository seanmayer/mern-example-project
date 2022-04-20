const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use("/tmps/images", express.static(path.join("tmps","images")));
app.use(express.static(path.join("public")));

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cgogk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(() => {
  app.listen(process.env.PORT || 5000);
}).catch((error) => {
  console.log(error);
});
