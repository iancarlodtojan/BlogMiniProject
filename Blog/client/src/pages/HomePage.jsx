import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import PostCard from "../components/PostCard";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");

        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [location]);

  const handlePostDeleted = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-[2.5em] mb-6 text-gray-700 font-semibold">
          My Blog
        </h1>

        <Link to="/new">
          <Button>New Post</Button>
        </Link>

        <div className="mt-8">
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet</p>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                createdAt={post.createdAt}
                content={post.content}
                author={post.author}
                onDelete={handlePostDeleted}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;