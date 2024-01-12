import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const blog = { title, body, author };
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setBody("");
      setAuthor("");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>New Blog</h3>

      <label>Title</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label>Your BLoG Here</label>
      <input
        type="text"
        onChange={(e) => {
          setBody(e.target.value);
        }}
        value={body}
      />
      <label>Author</label>
      <input
        type="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        value={author}
      />

      <button>Add Blog</button>
    </form>
  );
};

export default BlogForm;
