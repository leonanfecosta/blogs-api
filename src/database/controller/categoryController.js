const categoryService = require('../service/categoryService');

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await categoryService.createCategory({ name });

      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = categoryController;