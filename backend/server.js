import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/api/blogs", async (req, res) => {
  const getBlogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(getBlogs);
});

app.get("/api/blogs:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404);
  }

  const getSingleBlogs = await Blog.findById(id);

  if (!getSingleBlogs) {
    return res.status(404).json({ error: "No Such Blog" });
  }

  res.status(200).json(getSingleBlogs);
});

app.post("/api/blogs", async (req, res) => {
  const { title, body, author } = req.body;
  try {
    const blog = await Blog.create({
      title,
      body,
      author,
    });
    res.json(blog);
  } catch (error) {
    res.json(error.message);
  }
});

app.delete("/api/blogs:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404);
  }

  const deleteBlog = await Blog.findOneAndDelete({ _id: id });

  if (!deleteBlog) {
    return res.status(404).json({ error: "No Such Blog" });
  }

  res.status(200).json(deleteBlog);
});

mongoose
  .connect(
    "mongodb+srv://fullstack:mernapp@mernapp.uvmdehi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// SCHEMA // ------------------------------------------------------------------------

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
