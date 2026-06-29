import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/authService";
import "./Form.css";

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPost(formData);

      alert("Post created successfully!");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Post Title</label>

          <input
            type="text"
            name="title"
            placeholder="Enter an engaging title..."
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Content</label>

          <textarea
            name="content"
            placeholder="Share your thoughts with the world..."
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;