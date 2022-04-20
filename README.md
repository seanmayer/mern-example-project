# MERN Project Example
Building a fullstack React.js application with Node.js, Express.js &amp; MongoDB (MERN)

- MongoDB - document database
- Express(.js) - Node.js web framework
- React(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server

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

### Finally... (for local development)

1. `npm start --prefix backend`
2. `npm start --prefix frontend` (don't forget to change package.json from `"start": "node app.js"` to `"start": "nodemon app.js"`)

## Testing Tools

### Backend testing

- Postman used for Node.js API testing

### Frontend testing

1. Test frontend locally -> Simple local server -> `npm install -g serve --prefix frontend` (can serve static site)
2. `cd frontend/build/`
3. `serve` 

## Security Considerations

### JSON Web Token (JWT) is an open standard (RFC 7519) used for Authentication

- JWT uses HMAC alorifthm by default (HS256)
- Involves a combination of a hashing function and one (secret) key 
- Shared between the two parties used to generate the hash that will serve as the signature
- Great care must be taken to protecting the key, becuase the same key is used to generate the signture and to perform validation

### Token is stored in local storage 

- Cross-site scripting (XSS) vunerability, this is vunerable as the local storage used to persist the tokens is accessible to all JS on the same domain
- To note: React does have some protective measures in place for XSS

## Deployment

- Used dotenv to store environment variables for frontend
- Backend is using Heroku to source configured environment variables

### Frontend (React) - DEV testing

1. `npm run build` -> Optimises, provides only essentials (strips out debugging)
2. New build folder will be created with all files needed to deploy

### Backend (Express.js) - DEV testing

- Nodemon is used as tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory detected. (not to use in production environment)

### Backend (Express.js) - Heroku

- Create heroku app and use git to push changes 😀 

### Standalone SPA Frontend (React) - Production with Google Firebase

1. `sudo npm install -g firebase-tools --prefix frontend`
2. `firbase login`
3. `firebase init` configuration below:

- `Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices` -> `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
- `Please select an option:` -> `Create a new project`
- `What do you want to use as your public directory?` -> `build`
- `? Configure as a single-page app (rewrite all urls to /index.html)?` -> `Yes`

4. `firebase deploy` 

### Combine Frontend & Backend (React) - Heroku

1. `npm run build --prefix frontend`
2. Create `public` folder in backend directory
3. Copy `frontend/build` contents to `backend/public`
4. `git add .` 
5. `git commit -m "added react frontend"`
6. `git push heroku master`

#### Optimisation 

- Code splitting is used to "lazy-load" to create code chunks as and when a user needs a certain component, this increases performance. 

##### Example

Usage of Suspense -> `import React, { Suspense } from "react";` 

Lazy load component -> `const Users = React.lazy(() => import("./user/pages/Users"));`

Suspense is used to handle loading of components:

```
return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};
```




