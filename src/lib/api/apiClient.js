import axios from "axios";


const apiClient = axios.create({

    baseURL: "http://127.0.0.1:8000/api",

    headers: {
        "Accept": "application/json",
    },

});



// Request Interceptor (Token bhejne ke liye)

apiClient.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("token");


        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }


        return config;

    },


    (error) => {

        return Promise.reject(error);

    }

);



// Response Interceptor

apiClient.interceptors.response.use(

    (response) => {

        return response;

    },


    (error) => {


        if (error.response?.status === 401) {

            localStorage.removeItem("token");

            window.location.href = "/login";

        }


        return Promise.reject(error);

    }

);


export default apiClient;