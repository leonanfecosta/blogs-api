const { User } = require('../models');

const userService = {
  createUser: async ({ displayName, email, password, image }) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return { code: 409, message: 'User already registered' };
    }

    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  },

  getAllUsers: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  getUserById: async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) {
      return { code: 404, message: 'User does not exist' };
    }
    return user;
  },
};

module.exports = userService;