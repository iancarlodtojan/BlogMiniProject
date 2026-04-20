import { Link } from "react-router-dom";
import Button from "../components/Button";
function NewPostPage() {
  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-[2.5em] mb-6 text-gray-700 font-semibold">
          My Blog - New Post
        </h1>

        <input
          type="text"
          placeholder="Title"
          className="mb-4 w-full rounded border border-gray-300 p-3 text-lg outline-none"
        />

        <textarea
          placeholder="Content"
          rows="8"
          className="mb-4 w-full rounded border border-gray-300 p-3 text-lg outline-none resize-none"
        ></textarea>

        <input
          type="text"
          placeholder="Author"
          className="mb-6 w-full rounded border border-gray-300 p-3 text-lg outline-none"
        />

        <div className="flex gap-3">
          <Button>Create Post</Button>
          <Link to="/">
            <Button variant="red">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
