import { useEffect } from "react";
import ModalLayout from "../ui/ModalLayout";

const ScreenLoader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <ModalLayout isBlur={false}>
            <span className="loader"></span>
        </ModalLayout>
    );
};
export default ScreenLoader;
