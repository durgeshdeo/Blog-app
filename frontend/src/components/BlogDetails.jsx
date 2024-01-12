// import Button from "./Button";

const BlogDetails = ({ blog }) => {
  //   const handleDelete = (e) => {
  //     e.preventDefault();

  //   };

  return (
    <div className="blog-details">
      <h4>{blog.title}</h4>
      <p>{blog.body}</p>
      <span>
        <strong>Written By: </strong>
      </span>
      <span>{blog.author}</span>
      <button>Delete</button>
    </div>
  );
};

export default BlogDetails;
