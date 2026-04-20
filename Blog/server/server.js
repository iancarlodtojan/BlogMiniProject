import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/posts", (req, res) => {
  const { title, content, author } = req.body;

  console.log("Received:", { title, content, author });

  res.status(201).json({ message: "Post created!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});