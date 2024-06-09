import { forwardRef } from "react";

// Types / Interfaces
export type AuthInputProps = {
    label?: string;
    value: string;
    name: string;
    type?: string;
    placeholder?: string;
    py?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
    ({ value, name, onChange, label = "", placeholder = "", type = "text", py = "py-2" }, ref) => {
        return (
            <section className="w-full space-y-1">
                {label && (
                    <label htmlFor={name} className="text-base font-medium">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    ref={ref}
                    className={`w-full rounded-md border border-gray-600 bg-transparent p-4 text-sm text-gray-300 outline-none focus-within:border-primary-button ${py}`}
                />
            </section>
        );
    },
);
export default AuthInput;
