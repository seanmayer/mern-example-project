if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
       console.log('Connection failed')
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

exports.createProduct = createProduct;
