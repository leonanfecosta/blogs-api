const express = require('express');
const loginController = require('./database/controller/loginController');
const validateLogin = require('./database/middlewares/validateLogin');
const userController = require('./database/controller/userController');
const validateUser = require('./database/middlewares/validateUser');

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

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
