## Setting up NodeJS with express

Install express -> `npm install express --save`
Run the server -> `node nodejs/app.js`

## Nodemon - NodeJS tool to allow project recompilations on save
Install nodemon -> `npm install nodemon --save-dev`

`package.json`:

```
{
  "name": "express-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
}
```

Run nodemon: `npm start`

## Body-parser - Ready to use middleware to parse incoming request bodys
Install body-parser -> `npm install body-parser --save`