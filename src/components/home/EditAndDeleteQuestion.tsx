import { useState } from "react";

// Hooks and Slice
import { useCustomMutation } from "../../hooks/useCustomMutation";
import useNetworkState from "../../hooks/useNetworkState";

// Components
import ScreenLoader from "../animations/ScreenLoader";
import QuestionOperationModal from "./QuestionOperationModal";

// Utils
import { apiDeleteQuestion, apiEditQuestion } from "../../api/apiFunctions";
import { toastError } from "../../helpers/toastFunctions";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Types / Interfaces
import { Question, QuestionInputValues, UpdateQuestionToServerProps } from "../../types/types";

type EditAndDeleteQuestionProps = {
    question: Question;
};

const EditAndDeleteQuestion = ({ question }: EditAndDeleteQuestionProps) => {
    // States and Variables
    const { _id } = question;
    const { isOnline } = useNetworkState();
    const { mutate: deleteQuestionFromServer, isPending: isPendingDeleteQuestion } = useCustomMutation({
        mutationFn: apiDeleteQuestion,
        queryKeyToInvalidate: ["questions"],
    });
    const { mutate: updateQuestionToServer, isPending: isPendingUpdateQuestion } = useCustomMutation({
        mutationFn: (props: UpdateQuestionToServerProps) => apiEditQuestion(props.questionId, props?.updatedValue),
        queryKeyToInvalidate: ["questions"],
        onSuccess: () => handleCloseEditQuestionModal(),
    });

    const [isOpenAddQuestionModal, setIsOpenAddQuestionModal] = useState<Boolean>(false);

    // Functions and useEffects
    const handleOpenEditQuestionModal = () => setIsOpenAddQuestionModal(true);
    const handleCloseEditQuestionModal = () => setIsOpenAddQuestionModal(false);

    const checkIfQuestionIsEdited = (updatedValue: QuestionInputValues) => {
        const isSame = (Object.keys(updatedValue) as (keyof QuestionInputValues)[]).every((key) => updatedValue[key] === question[key]);
        return !isSame;
    };

    const handleEditQuestion = (updatedValue: QuestionInputValues) => {
        const questionId = _id;
        const isQuestionEdited = checkIfQuestionIsEdited(updatedValue);

        if (isQuestionEdited) updateQuestionToServer({ questionId, updatedValue });
        else toastError({ message: "No changes made to the question" });
    };
    const handleDeleteQuestion = () => {
        const questionId = _id;
        deleteQuestionFromServer(questionId);
    };

    return (
        <>
            {/* MODAL */}
            {isOpenAddQuestionModal && (
                <QuestionOperationModal defaultValues={question} onClose={handleCloseEditQuestionModal} onSubmit={handleEditQuestion} />
            )}

            {(isPendingUpdateQuestion || isPendingDeleteQuestion) && <ScreenLoader />}

            <button onClick={handleOpenEditQuestionModal} className="flex w-full items-center justify-center bg-primary-bg p-2 px-1">
                <MdEdit className="text-xl text-green-600" />
            </button>
            <button
                disabled={!isOnline}
                onClick={handleDeleteQuestion}
                className="disable-button flex w-full items-center justify-center bg-primary-bg p-2 px-1"
            >
                <MdDelete className="text-xl text-red-600" />
            </button>
        </>
    );
};
export default EditAndDeleteQuestion;
