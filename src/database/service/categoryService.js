const { Category } = require('../models');

const categoryService = {
  createCategory: async ({ name }) => {
    const newCategory = await Category.create({ name });
    return newCategory;
  },

  getAllCategories: async () => {
    const categories = await Category.findAll();
    return categories;
  },
};

module.exports = categoryService;