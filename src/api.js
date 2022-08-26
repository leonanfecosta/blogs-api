const express = require('express');
const loginController = require('./database/controller/loginController');
const validateLogin = require('./database/middlewares/validateLogin');

// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, loginController.login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
