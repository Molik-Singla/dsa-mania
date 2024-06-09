import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/input.css";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // Disable retries
            refetchOnWindowFocus: false,
            staleTime: Infinity, // never refetch data
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <QueryClientProvider client={queryClient}>
            <App />
            <Toaster position="top-center" gutter={16} />
            <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
        </QueryClientProvider>
    </>,
);
