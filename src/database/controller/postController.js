const postService = require('../service/postService');

const postController = {
  create: async (req, res) => {
    try {
      const { title, content, categoryIds } = req.body;
      const { id: userId } = req.user;

      const post = await postService.create(
        title,
        content,
        userId,
        categoryIds,
      );

      if (post.error) {
        return res
          .status(post.error.code)
          .json({ message: post.error.message });
      }

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await postService.getAllPosts();

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = postController;
