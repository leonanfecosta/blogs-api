const categoryService = require('../service/categoryService');

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await categoryService.createCategory({ name });

      if (category.code) {
        return res.status(category.code).json({ message: category.message });
      }

      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = categoryController;