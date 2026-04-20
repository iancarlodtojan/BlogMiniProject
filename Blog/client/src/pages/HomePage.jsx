import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import PostCard from "../components/PostCard";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/posts")
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);

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
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
