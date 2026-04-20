import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
const posts = [];

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

app.post("/posts", (req, res) => {
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
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content, author } = req.body;
  post.title = title;
  post.content = content;
  post.author = author;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});