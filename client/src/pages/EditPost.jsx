import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../services/authService";
import "./Form.css";

function EditPost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await getPostById(id);

      setFormData({
        title: response.data.title,
        content: response.data.content,
      });
    } catch (error) {
      alert(error.response?.data?.message || "You are not authorized to edit this post.");
      navigate("/");
}
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePost(id, formData);

      alert("Post updated successfully!");

      navigate("/");
    } catch (error) {
        alert(error.response?.data?.message || "Failed to update post.");
        navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Post Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="form-group">
          <label>Content</label>

          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Update your post..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPost;