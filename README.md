# MERN Project Example
Building a fullstack React.js application with Node.js, Express.js &amp; MongoDB (MERN)

## Setting up a NodeJS Express Project

1. `npm init --prefix backend`
2. `npm install --save express body-parser --prefix backend`
3. `npm install --save-dev nodemon --prefix backend`
4. `npm start --prefix backend`
5. `npm install --save uuid --prefix backend`
6. `npm install --save express-validator --prefix backend`
7. `npm install --save axios --prefix backend`
8. `npm install dotenv --save --prefix backend`
9. `npm install --save mongoose --prefix backend`
10. `npm install --save mongoose-unique-validator --prefix backend`
11. `npm install --save multer --prefix backend`
12. `npm install --save bcryptjs --prefix backend`
13. `npm install --save jsonwebtoken --prefix backend`

## Testing Tools

- Postman used for Node.js API testing

## Security Considerations

# JSON Web Token (JWT) is an open standard (RFC 7519) used for Authentication

- JWT uses HMAC alorifthm by default (HS256)
- Involves a combination of a hashing function and one (secret) key 
- Shared between the two parties used to generate the hash that will serve as the signature
- Great care must be taken to protecting the key, becuase the same key is used to generate the signture and to perform validation

# Token is stored in local storage 

- Cross-site scripting (XSS) vunerability, this is vunerable as the local storage used to persist the tokens is accessible to all JS on the same domain
- To note: React does have some protective measures in place for XSS

## Deployment

# Frontend 

- Used dotenv to store environment variables.

1. `npm run build` -> Optimises, provides only essentials (strips out debugging)
2. New build folder will be created with all files needed to deploy

# Backend 

- Nodemon is used as tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory detected.


