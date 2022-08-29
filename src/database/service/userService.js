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
};

module.exports = userService;