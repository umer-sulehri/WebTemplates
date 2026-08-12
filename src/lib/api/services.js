import apiClient from "./apiClient";

// Get All Services
export const getServices = async () => {
    try {
        const response = await apiClient.get("/services");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Service
export const getService = async (id) => {
    try {
        const response = await apiClient.get(`/services/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Service
export const createService = async (data) => {
    try {
        const response = await apiClient.post("/services", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Service
export const updateService = async (id, data) => {
    try {
        const response = await apiClient.post(
            `/services/${id}?_method=PUT`,
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

// Delete Service
export const deleteService = async (id) => {
    try {
        const response = await apiClient.delete(`/services/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};