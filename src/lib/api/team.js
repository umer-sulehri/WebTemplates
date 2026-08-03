import apiClient from "./apiClient";

// Get All Team Members
export const getTeamMembers = async () => {
    try {
        const response = await apiClient.get("/team");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Team Member
export const getTeamMember = async (id) => {
    try {
        const response = await apiClient.get(`/team/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Team Member
export const createTeamMember = async (data) => {
    try {
        const response = await apiClient.post("/team", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Team Member
export const updateTeamMember = async (id, data) => {
    try {
        const response = await apiClient.put(`/team/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete Team Member
export const deleteTeamMember = async (id) => {
    try {
        const response = await apiClient.delete(`/team/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};