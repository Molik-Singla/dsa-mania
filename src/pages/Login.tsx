import { useEffect, useState } from "react";

// Hooks and Slice
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useCustomMutation } from "../hooks/useCustomMutation";
import useAuth from "../hooks/useAuth";

// Components
import AuthInput from "../components/login/AuthInput";
import ScreenLoader from "../components/animations/ScreenLoader";

// Types / Interfaces
import { AuthValues } from "../types/types";

// Utils
import { toastError } from "../helpers/toastFunctions";
import { apiLogin } from "../api/apiFunctions";

const Login = () => {
    // States and Variables
    const navigate: NavigateFunction = useNavigate();
    const { isAuthenticated, isLoading: isLoadingProfile } = useAuth();

    const { mutate: login, isPending: isPendingLogin } = useCustomMutation({
        mutationFn: (values: AuthValues) => apiLogin(values.email, values.password),
        queryKeyToInvalidate: ["profile"],
        onSuccess: () => {
            navigate("/");
        },
    });
    const [authValues, setAuthValues] = useState<AuthValues>({
        email: "",
        password: "",
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuthValues({
            ...authValues,
            [name]: value,
        });
    };
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = authValues;
        if (!email || !password) return toastError({ message: "Please fill in all fields" });

        login(authValues);
    };

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    return (
        <>
            {(isPendingLogin || isLoadingProfile) && <ScreenLoader />}
            <section className="flex min-h-screen w-full items-center justify-center px-4 text-gray-200">
                <form
                    onSubmit={handleOnSubmit}
                    className="flex h-auto w-full max-w-[460px] flex-col gap-5 rounded-lg bg-secondary-bg p-6 py-8 md:p-10"
                >
                    <AuthInput label="Email" name="email" type="email" value={authValues.email} onChange={handleOnChange} />
                    <AuthInput label="Password" name="password" value={authValues.password} onChange={handleOnChange} />

                    <button className="mt-3 w-full rounded-md bg-primary-button py-3 font-medium transition-all duration-200 hover:bg-secondary-button">
                        Log in
                    </button>
                </form>
            </section>
        </>
    );
};
export default Login;
