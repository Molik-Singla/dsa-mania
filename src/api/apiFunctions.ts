// Utils
import { apiRequestHandler } from "./helpers";
import { toastSuccess } from "../helpers/toastFunctions";

// Types / Interfaces
import { QuestionInputValues } from "../types/types";

export const apiLogin = async (email: string, password: string) => {
    const data = await apiRequestHandler({
        method: "POST",
        url: "/user/auth/login",
        data: { email, password },
    });

    toastSuccess({ message: "Login Successful" });
    return data;
};

export const apiGetQuestions = async () => {
    const data = await apiRequestHandler({
        method: "GET",
        url: "/question?page=1&limit=10000",
    });

    return data;
};

export const apiDeleteQuestion = async (questionId: string) => {
    const data = await apiRequestHandler({
        method: "DELETE",
        url: `/question/${questionId}`,
    });

    toastSuccess({ message: "Question Deleted" });
    return data;
};

export const apiAddQuestion = async (question: QuestionInputValues) => {
    const data = await apiRequestHandler({
        method: "POST",
        url: "/question",
        data: question,
    });

    toastSuccess({ message: "Question Added" });
    return data;
};

export const apiEditQuestion = async (questionId: string, question: QuestionInputValues | { status: string }) => {
    const data = await apiRequestHandler({
        method: "PATCH",
        url: `/question/${questionId}`,
        data: question,
    });

    toastSuccess({ message: "Question Edited" });
    return data;
};

export const apiGetMe = async () => {
    const data = await apiRequestHandler({
        method: "GET",
        url: "/user/getMe",
    });

    return data;
};

export const apiLogout = async () => {
    const data = await apiRequestHandler({
        method: "POST",
        url: "/user/auth/logout",
    });

    toastSuccess({ message: "Logout Successful" });
    return data;
};
