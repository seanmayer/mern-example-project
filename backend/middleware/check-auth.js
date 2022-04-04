if (process.env.NODE_ENV !== "production") {
     require("dotenv").config();
}
const HttpError = require("../models/http-error")
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
     if(req.method === "OPTIONS") {
          return next();
     }
     try {
          const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
          if (!token) {
              throw new HttpError("Authentication failed!", 401);
          }

     const SECRET_KEY = process.env.SECRET_KEY;
     const decodedToken = jwt.verify(token, SECRET_KEY);
     req.userData = {userId: decodedToken.userId};
     next();
     } catch (err) {
          const error = new HttpError("Authentication failed!", 401);
          return next(error); 
     }
};