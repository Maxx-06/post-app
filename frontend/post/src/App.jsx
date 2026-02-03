import { Routes, Route, Link } from "react-router-dom";
import Allpost from "./pages/Allpost";
import CreatePost from "./pages/CreatePost";
import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-xs bg-[#F2F2F2] min-h-full w-full mx-auto">
        <nav className="flex justify-center items-center p-4 h-16 bg-[#F2F2F2]">
          <Link to="/posts">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-4">
              Post App
            </button>
          </Link>
          <Link to="/create">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mx-4">
              Create Post
            </button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Allpost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts" element={<Allpost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
