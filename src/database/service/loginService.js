const { User } = require('../models');

const loginService = {
  findUser: async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
    if (!user || user.password !== password) {
      return { code: 400, message: 'Invalid fields' };
    }
    return user;
  },
};

module.exports = loginService;
