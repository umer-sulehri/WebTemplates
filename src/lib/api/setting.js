import apiClient from "./apiClient";

// Get Settings
export const getSettings = async () => {
    try {
        const response = await apiClient.get("/settings");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Settings
export const updateSettings = async (data) => {
    try {
        const response = await apiClient.put("/settings", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};