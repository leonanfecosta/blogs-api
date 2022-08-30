const { PostCategory, BlogPost, Category, sequelize } = require('../models');

const postService = {
  create: async (title, content, userId, categoryIds) => {
    const verifyCategory = await Category.findAll({
      where: { id: categoryIds },
    });
    if (verifyCategory.length !== categoryIds.length) {
      return {
        error: { code: 400, message: '"categoryIds" not found' },
      };
    }

    const postTransaction = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId }, { transaction: t });
      const postCategories = categoryIds.map((categoryId) => ({
        postId: post.id,
        categoryId,
      }));
      await PostCategory.bulkCreate(postCategories, { transaction: t });
      return post;
    });

    return postTransaction;
  },
};

module.exports = postService;