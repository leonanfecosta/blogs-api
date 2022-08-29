const { Category } = require('../models');

const categoryService = {
  createCategory: async ({ name }) => {
    const category = await Category.findOne({ where: { name } });

    if (category) {
      return { code: 409, message: 'Category already registered' };
    }

    const newCategory = await Category.create({ name });
    return newCategory;
  },
};

module.exports = categoryService;