import apiClient from "./apiClient";

// Login
export const login = async (data) => {
    try {
        const response = await apiClient.post("/login", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Logout
export const logout = async () => {
    try {
        const response = await apiClient.post("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Auth User
export const getProfile = async () => {
    try {
        const response = await apiClient.get("/user");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (data) => {
    try {
        const response = await apiClient.post("/register", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};