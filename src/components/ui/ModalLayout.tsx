import { ReactNode } from "react";

// Types / Interfaces
type ModalLayoutProps = {
    isBlur?: boolean;
    children: ReactNode;
};

const ModalLayout = ({ isBlur = true, children }: ModalLayoutProps) => {
    const blurClasses = isBlur ? "backdrop-blur-sm bg-transparent" : "bg-primary-bg";

    return (
        <section
            className={`fixed left-0 top-0 z-50 flex h-full min-h-screen w-full items-center justify-center text-gray-200 ${blurClasses}`}
        >
            {children}
        </section>
    );
};
export default ModalLayout;
