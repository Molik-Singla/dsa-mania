import toast from "react-hot-toast";
type ToastProps = {
    message: string;
    duration?: number;
};

export const toastSuccess = ({ message, duration = 3000 }: ToastProps): void => {
    toast.dismiss();
    toast.success(message, { duration: duration });
};

export const toastError = ({ message, duration = 3000 }: ToastProps): void => {
    toast.dismiss();
    toast.error(message, { duration: duration });
};

export const toastLoading = ({ message, duration = 3000 }: ToastProps): void => {
    toast.loading(message, { duration: duration });
};

export const toastInfo = ({ message, duration = 3000 }: ToastProps): void => {
    toast(message, { duration: duration });
};
