import apiClient from "./apiClient";

export const getBlogs = async () => {
    try {
        const response = await apiClient.get("/blogs");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBlog = async (id) => {
    try {
        const response = await apiClient.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createBlog = async (data) => {
    try {
        const response = await apiClient.post("/blogs", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateBlog = async (id, data) => {
    try {
        const response = await apiClient.put(`/blogs/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await apiClient.delete(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};