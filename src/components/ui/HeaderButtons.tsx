import { useState } from "react";

// Hooks and Slice
import { useNavigate } from "react-router-dom";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import { useQueryClient } from "@tanstack/react-query";
import useNetworkState from "../../hooks/useNetworkState";

// Components
import QuestionOperationModal from "../home/QuestionOperationModal";
import ScreenLoader from "../animations/ScreenLoader";

// Utils
import { apiAddQuestion, apiLogout } from "../../api/apiFunctions";

// Types / Interfaces
import { QuestionInputValues } from "../../types/types";

const HeaderButtons = () => {
    // States and Variables
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { isOnline } = useNetworkState();

    const { mutate: addQuestion, isPending: isPendingAddQuestion } = useCustomMutation({
        mutationFn: (question: QuestionInputValues) => apiAddQuestion(question),
        queryKeyToInvalidate: ["questions"],
        onSuccess: () => handleCloseAddQuestionModal(),
    });

    const { mutate: logout, isPending: isPendingLogout } = useCustomMutation({
        mutationFn: apiLogout,
        onSuccess: () => {
            queryClient.clear(); // clear all cache
            navigate("/login");
        },
    });

    const [isOpenAddQuestionModal, setIsOpenAddQuestionModal] = useState<Boolean>(false);

    // Functions and useEffects
    const handleOpenAddQuestionModal = () => setIsOpenAddQuestionModal(true);
    function handleCloseAddQuestionModal() {
        setIsOpenAddQuestionModal(false);
    }
    const handleAddQuestion = (inputValue: QuestionInputValues) => {
        addQuestion(inputValue);
    };
    const handleLogout = () => {
        logout({});
    };

    return (
        <>
            {isOpenAddQuestionModal && <QuestionOperationModal onClose={handleCloseAddQuestionModal} onSubmit={handleAddQuestion} />}

            {(isPendingAddQuestion || isPendingLogout) && <ScreenLoader />}
            <section className="flex gap-4">
                <button
                    onClick={handleOpenAddQuestionModal}
                    disabled={!isOnline}
                    className="disable-button rounded-md bg-primary-button px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-secondary-button md:px-8"
                >
                    Add Question
                </button>
                <button
                    onClick={handleLogout}
                    disabled={!isOnline}
                    className="disable-button rounded-md bg-primary-button px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-secondary-button disabled:cursor-not-allowed disabled:opacity-50 md:px-8"
                >
                    Logout
                </button>
            </section>
        </>
    );
};
export default HeaderButtons;
