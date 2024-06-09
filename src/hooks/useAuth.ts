import { useQuery } from "@tanstack/react-query";
import { apiGetMe } from "../api/apiFunctions";

const useAuth = () => {
    const { data, isLoading, isFetched, error, isError, status, isRefetching, fetchStatus } = useQuery({
        queryKey: ["profile"],
        queryFn: apiGetMe,
        staleTime: Infinity,
        refetchOnMount: true,
    });

    // const isProfileLoaded = !isLoading && isFetched;
    const isAuthenticated = Boolean(data) ? true : false;

    return { data, isLoading, isFetched, error, isError, isAuthenticated, status, isRefetching, fetchStatus };
};
export default useAuth;
