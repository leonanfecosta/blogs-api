const loginService = require('../service/loginService');
const createToken = require('../helpers/createToken');

const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginService.findUser({ email, password });

      if (user.code) {
        return res.status(user.code).json({ message: user.message });
      }

      const token = createToken(user);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = loginController;