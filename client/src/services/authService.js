import api from "./api";

export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};

export const createPost = (postData) => {
  const token = localStorage.getItem("token");

  return api.post("/posts", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPosts = () => {
  return api.get("/posts");
};

export const getPostById = (id) => {
  return api.get(`/posts/${id}`);
};

export const updatePost = (id, postData) => {
  const token = localStorage.getItem("token");

  return api.put(`/posts/${id}`, postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePost = (id) => {
  const token = localStorage.getItem("token");

  return api.delete(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};