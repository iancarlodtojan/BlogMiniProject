import Button from "../components/button";

function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-[2.5em] mb-6 text-gray-700 font-semibold">
          My Blog
        </h1>
        <Button>New Post</Button>
      </div>
    </div>
  );
}

export default HomePage;
