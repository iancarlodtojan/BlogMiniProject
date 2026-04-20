import {BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
