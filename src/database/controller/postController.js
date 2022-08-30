const postService = require('../service/postService');

const postController = {
  create: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;

    const post = await postService.create(title, content, userId, categoryIds);

    if (post.error) { return res.status(post.error.code).json({ message: post.error.message }); }

    res.status(201).json(post);
  },
};

module.exports = postController;
