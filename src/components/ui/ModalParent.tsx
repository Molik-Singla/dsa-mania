import { ReactNode } from "react";

type ModalParentProps = {
    children: ReactNode;
};

const ModalParent = ({ children }: ModalParentProps) => {
    return (
        <section className="fixed top-0 z-50 flex h-full min-h-screen w-full items-center justify-center bg-transparent text-gray-200 backdrop-blur-sm">
            {children}
        </section>
    );
};
export default ModalParent;
