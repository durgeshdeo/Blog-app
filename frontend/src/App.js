import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import BlogForm from "./pages/BlogFrom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<BlogForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
