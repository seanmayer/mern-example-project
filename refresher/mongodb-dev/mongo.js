if (process.env.NODE_ENV !== "production") {
     require("dotenv").config();

}
const MongoClient = require('mongodb').MongoClient;
const url = process.env.CONNECTION;

const createProduct = async (req, res, next) => {

};

const getProducts = async (req, res, next) => {

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;