import Button from "./Button";

function PostCard({ title, createdAt, content, author }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h2 className="mb-2 text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        {new Date(createdAt).toLocaleString()}
      </p>

      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        {content}
      </p>

      <p className="mb-4 text-sm text-gray-500">
        By: <span>{author}</span>
      </p>

      <div className="flex gap-3">
        <Button variant="blue">Edit</Button>
        <Button variant="red">Delete</Button>
      </div>
    </div>
  );
}

export default PostCard;