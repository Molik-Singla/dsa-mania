import axios, { AxiosRequestConfig, Method } from "axios";
import { toastError } from "../helpers/toastFunctions";

interface ApiRequestConfig extends AxiosRequestConfig {
    method: Method;
    url: string;
    data?: any;
    params?: any;
}

export const axiosErrorHandler = (error: any) => {
    console.log(error);
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // Server responded with a status other than 2xx
            let message = error.response.data.message;

            switch (error.response.status) {
                case 400:
                    message = message || "Bad Request. Please check the data you have entered.";
                    break;
                case 401:
                    message = message || "Unauthorized. Please log in again.";
                    break;
                case 404:
                    message = message || "Resource not found.";
                    break;
                case 500:
                    message = message || "Internal Server Error. Please try again later.";
                    break;
                default:
                    message = message || `Unexpected error: ${error.response.statusText}`;
            }

            toastError({ message });
            throw new Error(message);
        } else if (error.request) {
            // Request was made but no response received
            let message = "No response received from server. Please check your network connection.";
            toastError({
                message: message,
            });
            throw new Error(message);
        } else {
            // Something else happened while setting up the request
            let message = `Request setup error: ${error.message}`;
            toastError({ message: message });
            throw new Error(message);
        }
    } else {
        // Non-Axios error
        // console.error("Unexpected error:", error);
        toastError({ message: "An unexpected error occurred. Please try again later." });
        throw new Error("An unexpected error occurred. Please try again later.");
    }
};
export const apiRequestHandler = async ({ method, url, data, params }: ApiRequestConfig) => {
    try {
        const response = await axios({
            method,
            url: `${import.meta.env.VITE_API_BASE_URL}${url}`,
            data,
            params,
            withCredentials: true,
        });

        // if (response?.data?.message) toastSuccess({ message: response.data.message });
        return response.data;
    } catch (error) {
        return axiosErrorHandler(error);
    }
};
