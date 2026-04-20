import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;