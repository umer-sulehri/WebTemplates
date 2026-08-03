import apiClient from "./apiClient";

// Get SEO
export const getSeo = async () => {
    try {
        const response = await apiClient.get("/seo");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update SEO
export const updateSeo = async (data) => {
    try {
        const response = await apiClient.put("/seo", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};