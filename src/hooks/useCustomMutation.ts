import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";

interface UseCustomMutationProps<TData, TError, TVariables = void> {
    mutationFn: (variables: TVariables) => Promise<TData>;
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
    onSettled?: (data: TData | undefined, error: TError | null) => void;
    queryKeyToInvalidate?: string[];
}

export const useCustomMutation = <TData, TError, TVariables>({
    mutationFn,
    onSuccess,
    onError,
    onSettled,
    queryKeyToInvalidate,
}: UseCustomMutationProps<TData, TError, TVariables>): UseMutationResult<TData, TError, TVariables> => {
    const queryClient = useQueryClient();
    return useMutation<TData, TError, TVariables>({
        mutationFn: (variables) => mutationFn(variables),
        onSuccess: (data) => {
            if (queryKeyToInvalidate)
                queryClient.invalidateQueries({
                    queryKey: queryKeyToInvalidate,
                });
            if (onSuccess) onSuccess(data);
        },
        onError: (error) => {
            if (onError) onError(error);
        },
        onSettled: (data, error) => {
            if (onSettled) onSettled(data, error);
        },
    });
};
