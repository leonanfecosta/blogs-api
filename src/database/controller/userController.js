const userService = require('../service/userService');
const createToken = require('../helpers/createToken');

const userController = {
  createUser: async (req, res) => {
    try {
      const { displayName, email, password, image } = req.body;
      const user = await userService.createUser({
        displayName,
        email,
        password,
        image,
      });

      if (user.code) {
        return res.status(user.code).json({ message: user.message });
      }

      const payload = { displayName, email, image };

      const token = createToken(payload);

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    } 
  },
};

module.exports = userController;
