import apiClient from "./apiClient";

// Get All Portfolio
export const getPortfolios = async () => {
    try {
        const response = await apiClient.get("/portfolios");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Portfolio
export const getPortfolio = async (id) => {
    try {
        const response = await apiClient.get(`/portfolios/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Portfolio
export const createPortfolio = async (data) => {
    try {
        const response = await apiClient.post(
            "/portfolios",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};

// Update Portfolio
export const updatePortfolio = async (id, data) => {
    try {
        const response = await apiClient.post(
            `/portfolios/${id}?_method=PUT`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete Portfolio
export const deletePortfolio = async (id) => {
    try {
        const response = await apiClient.delete(`/portfolios/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};