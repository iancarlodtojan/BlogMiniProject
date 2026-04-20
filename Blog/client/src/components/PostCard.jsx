import { Link } from "react-router-dom";
import Button from "./Button";

function PostCard({ id, title, createdAt, content, author, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      const data = await response.json();
      console.log("Deleted post:", data);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <h2 className="mb-2 text-2xl font-semibold text-gray-700">{title}</h2>

      <p className="mb-4 text-sm text-gray-500">
        {new Date(createdAt).toLocaleString()}
      </p>

      <p className="mb-4 text-lg leading-relaxed text-gray-800">{content}</p>

      <p className="mb-4 text-sm text-gray-500">
        By: <span>{author}</span>
      </p>

      <div className="flex gap-3">
        <Link to={`/edit/${id}`}>
          <Button variant="blue">Edit</Button>
        </Link>
        <Button variant="red" onClick={handleDelete}>
          Delete Post
        </Button>
      </div>
    </div>
  );
}

export default PostCard;
