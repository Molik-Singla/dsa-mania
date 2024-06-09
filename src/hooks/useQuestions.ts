// Hooks and Slice
import { useQuery } from "@tanstack/react-query";

// Utils
import { apiGetQuestions } from "../api/apiFunctions";

// Types / Interfaces
import { Question } from "../types/types";

type QueryQuestions = {
    questions: Question[];
};

const useQuestions = () => {
    let { isLoading, data, error, isError, refetch, isFetching, isFetched, fetchStatus, isPending, isRefetching } =
        useQuery<QueryQuestions>({
            queryKey: ["questions"],
            queryFn: apiGetQuestions,
        });

    const questions = data?.questions || [];

    return { isLoading, data: questions, error, isError, refetch, isFetching, isFetched, fetchStatus, isPending, isRefetching };
};
export default useQuestions;
