const posts = [];

// CONTROLLERS handle WHAT happens

export const getPosts = (req, res) => {
  res.json(posts);
};

export const getPostById = (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

export const createPost = (req, res) => {
  const { title, content, author, createdAt } = req.body;

  const post = {
    id: Date.now().toString(),
    title,
    content,
    author,
    createdAt: createdAt || new Date().toISOString(),
  };

  posts.unshift(post);
  res.status(201).json(post);
};

export const updatePost = (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content, author } = req.body;

  post.title = title;
  post.content = content;
  post.author = author;

  res.json(post);
};

export const deletePost = (req, res) => {
  const index = posts.findIndex((p) => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
};