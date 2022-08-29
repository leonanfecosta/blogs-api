const express = require('express');
const loginController = require('./database/controller/loginController');
const validateLogin = require('./database/middlewares/validateLogin');
const userController = require('./database/controller/userController');
const validateUser = require('./database/middlewares/validateUser');
const validateJWT = require('./database/middlewares/validateJWT');
const categoryController = require('./database/controller/categoryController');
const validateCategory = require('./database/middlewares/validateNameCategory');

// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, loginController.login);

app.post(
  '/user',
  validateUser.validateDisplayName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.createUser,
);

app.get('/user', validateJWT, userController.getAllUsers);

app.get('/user/:id', validateJWT, userController.getUserById);

app.post(
  '/categories',
  validateJWT,
  validateCategory,
  categoryController.createCategory,
);

app.get('/categories', validateJWT, categoryController.getAllCategories);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
