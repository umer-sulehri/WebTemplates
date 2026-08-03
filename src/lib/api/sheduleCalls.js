import apiClient from "./apiClient";

// Get All Schedule Calls
export const getScheduleCalls = async () => {
    try {
        const response = await apiClient.get("/schedule-calls");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Schedule Call
export const getScheduleCall = async (id) => {
    try {
        const response = await apiClient.get(`/schedule-calls/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Schedule Call
export const createScheduleCall = async (data) => {
    try {
        const response = await apiClient.post("/schedule-calls", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Schedule Call
export const updateScheduleCall = async (id, data) => {
    try {
        const response = await apiClient.put(`/schedule-calls/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete Schedule Call
export const deleteScheduleCall = async (id) => {
    try {
        const response = await apiClient.delete(`/schedule-calls/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};