import apiClient from "./apiClient";

// Get All Testimonials
export const getTestimonials = async () => {
    try {
        const response = await apiClient.get("/testimonials");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Single Testimonial
export const getTestimonial = async (id) => {
    try {
        const response = await apiClient.get(`/testimonials/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Testimonial
export const createTestimonial = async (data) => {
    try {
        const response = await apiClient.post("/testimonials", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
};

// Update Testimonial
export const updateTestimonial = async (id, data) => {
    data.append("_method", "PUT");

    const response = await apiClient.post(
        `/testimonials/${id}`,
        data
    );

    return response.data;
};

// Delete Testimonial
export const deleteTestimonial = async (id) => {
    try {
        const response = await apiClient.delete(`/testimonials/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};