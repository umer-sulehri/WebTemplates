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

    const response = await apiClient.post(
        "/blogs",
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};
export const updateBlog = async (id, data) => {

    data.append("_method", "PUT");

    const response = await apiClient.post(
        `/blogs/${id}`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const deleteBlog = async (id) => {
    try {
        const response = await apiClient.delete(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const response = await apiClient.get(`/blogs/slug/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};