const jwt = require('jsonwebtoken');
const loginService = require('../service/loginService');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginService.findUser({ email, password });

      if (user.code) {
        return res.status(user.code).json({ message: user.message });
      }

      const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

      const token = jwt.sign({ data: user }, secret, jwtConfig);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = loginController;