import apiClient from "./apiClient";

// Create
export const createProjectRequest = async (data) => {
    const response = await apiClient.post(
        "/project-requests",
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

// Get All
export const getProjectRequests = async () => {
    const response = await apiClient.get("/project-requests");
    return response.data;
};

// Get Single
export const getProjectRequest = async (id) => {
    const response = await apiClient.get(`/project-requests/${id}`);
    return response.data;
};

// Update
export const updateProjectRequest = async (id, data) => {
    data.append("_method", "PUT");

    const response = await apiClient.post(
        `/project-requests/${id}`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

// Delete
export const deleteProjectRequest = async (id) => {
    const response = await apiClient.delete(`/project-requests/${id}`);
    return response.data;
};