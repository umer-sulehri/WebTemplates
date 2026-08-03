import apiClient from "./apiClient";

// Get All Contacts
export const getContacts = async () => {
    try {
        const response = await apiClient.get("/contacts");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Contact
export const getContact = async (id) => {
    try {
        const response = await apiClient.get(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Contact
export const createContact = async (data) => {
    try {
        const response = await apiClient.post("/contacts", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Contact
export const updateContact = async (id, data) => {
    try {
        const response = await apiClient.put(`/contacts/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete Contact
export const deleteContact = async (id) => {
    try {
        const response = await apiClient.delete(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};