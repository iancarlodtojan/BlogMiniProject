import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPost = async () => {

      try {

        const response = await axios.get(
          `http://localhost:5000/posts/${id}`
        );

        const data = response.data;

        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);

      } catch (error) {

        console.error(
          "Error fetching post:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchPost();

  }, [id]);

  const handleUpdate = async () => {

    const updatedPost = {
      title,
      content,
      author,
    };

    try {

      const response = await axios.put(
        `http://localhost:5000/posts/${id}`,
        updatedPost
      );

      console.log(
        "Updated post:",
        response.data
      );

      navigate("/");

    } catch (error) {

      console.error(
        "Error updating post:",
        error
      );

    }
  };

  if (loading) {
    return (
      <div className="p-10 text-xl">
        Loading post...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 py-10">

      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow">

        <h1 className="text-[2.5em] mb-6 text-gray-700 font-semibold">
          Edit Post
        </h1>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="mb-4 w-full rounded border border-gray-300 p-3 text-lg outline-none"
        />

        <textarea
          placeholder="Content"
          rows="8"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          className="mb-4 w-full rounded border border-gray-300 p-3 text-lg outline-none resize-none"
        ></textarea>

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
          className="mb-6 w-full rounded border border-gray-300 p-3 text-lg outline-none"
        />

        <div className="flex gap-3">

          <Button
            variant="blue"
            onClick={handleUpdate}
          >
            Update Post
          </Button>

          <Link to="/">
            <Button variant="red">
              Back
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EditPostPage;