import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../helpers/toastFunctions";

const useNetworkState = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOffline = () => {
            setIsOnline(false);
            toastError({ message: "You are offline. Please check your network connection" });
        };

        const handleOnline = () => {
            setIsOnline(true);
            toastSuccess({ message: "You are back to online." });
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return { isOnline };
};
export default useNetworkState;
