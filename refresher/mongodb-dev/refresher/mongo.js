if (process.env.NODE_ENV !== "production") {
     require("dotenv").config();
}
const MongoClient = require('mongodb').MongoClient;
const url = process.env.CONNECTION;

const createProduct = async (req, res, next) => {
     const newProduct = {
          name: req.body.name,
          price: req.body.price
     };
     const client = new MongoClient(url);

     client.connect((error) => {
          if (error) {
               return res.status(400).json({
                    status: 'error',
                    error: 'req body cannot be empty',
                  });
          } else {
            const collection = client.db('products').collection("products");
            collection.insertOne(newProduct, (error) => {
              if (error) {
               return res.status(400).json({
                    status: 'error',
                    error: 'req body cannot be empty',
                  });
              } else {
                client.close();
                res.status(200).json({
                    status: 'success',
                    data: req.body,
                  })
              }
            });
          }
        });
};

const getProducts = async (req, res, next) => {
     const client = new MongoClient(url)
     try {
          await client.connect();
          const db = client.db('products');
          products = await db.collection('products').find().toArray();
     } catch(error) {
          return res.json
     }
     client.close();
     res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;