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







app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});