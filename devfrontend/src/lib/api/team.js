import apiClient from "./apiClient";

export const getTeams = async () => {
    const response = await apiClient.get("/teams");
    return response.data.data;
};

export const getTeam = async (id) => {
    const response = await apiClient.get(`/teams/${id}`);
    return response.data.data;
};

export const createTeam = async (formData) => {
    const response = await apiClient.post("/teams", formData);
    return response.data;
};

export const updateTeam = async (id, formData) => {
    const response = await apiClient.post(`/teams/${id}`, formData);
    return response.data;
};

export const deleteTeam = async (id) => {
    const response = await apiClient.delete(`/teams/${id}`);
    return response.data;
};