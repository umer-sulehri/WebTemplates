import apiClient from "./apiClient";

export const submitForm = async (data) => {
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
