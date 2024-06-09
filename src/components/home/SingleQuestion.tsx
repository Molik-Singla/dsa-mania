import { useEffect, useState } from "react";

// Hooks and Slice
import { useCustomMutation } from "../../hooks/useCustomMutation";

// Components
import SelectInput from "../common/SelectInput";
import ScreenLoader from "../animations/ScreenLoader";
import EditAndDeleteQuestion from "./EditAndDeleteQuestion";
import NotesModal from "./NotesModal";

// Utils
import { apiEditQuestion } from "../../api/apiFunctions";
import { possibleStatus } from "../../utils/constants";
import { FaNoteSticky } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { capitalizeFirstLetter } from "../../helpers/commonFunctions";
import youtubeImg from "./../../assets/images/solution.webp";
import leetCodeImg from "./../../assets/images/pl2.webp";
import gfgImg from "./../../assets/images/gfg.svg";

// Types / Interfaces
import { Question, QuestionDifficulty, QuestionStatus, UpdateQuestionToServerProps } from "../../types/types";
type SingleQuestionProps = {
    question: Question;
};

const SingleQuestion = ({ question }: SingleQuestionProps) => {
    // States and Variables
    // For Edit question status only
    const { mutate: updateQuestionToServer, isPending: isPendingUpdateQuestion } = useCustomMutation({
        mutationFn: (props: UpdateQuestionToServerProps) => apiEditQuestion(props.questionId, props?.updatedValue),
        queryKeyToInvalidate: ["questions"],
    });

    const { videoLink, tufLink, quelink2, status, title, notes, _id, difficulty } = question;
    const [currentStatus, setCurrentStatus] = useState<QuestionStatus>(status);
    const [isOpenNotesModal, setIsOpenNotesModal] = useState<Boolean>(false);

    const statusClasses = currentStatus === "done" ? "bg-done" : currentStatus === "revisit" ? "bg-revisit" : "";

    // Functions and useEffects
    const handleOpenNotesModal = () => setIsOpenNotesModal(true);
    const handleCloseNotesModal = () => setIsOpenNotesModal(false);

    const handleOnChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as QuestionStatus;
        setCurrentStatus(value);
        const questionId = _id;
        updateQuestionToServer({ questionId, updatedValue: { status: e.target.value as QuestionStatus } });
    };

    const linkImage = (link: string) => {
        if (link.includes("geeksforgeeks")) return gfgImg;
        else if (link.includes("leetcode")) return leetCodeImg;
        else null;
    };
    let linkImageSrc = linkImage(quelink2);

    const handleDifficuiltyColor = (difficulty: QuestionDifficulty) => {
        if (difficulty === "easy") return "bg-green-400/20 border-green-600 text-green-400";
        else if (difficulty === "medium") return "bg-yellow-400/25 border-yellow-600 text-yellow-500";
        else return "bg-red-400/25 border-red-700 text-red-400";
    };
    let difficultyColor = handleDifficuiltyColor(difficulty);

    useEffect(() => {
        if (status !== currentStatus) setCurrentStatus(status);
    }, [status]);

    return (
        <>
            {isOpenNotesModal && notes && <NotesModal notes={notes} onClose={handleCloseNotesModal} />}
            {isPendingUpdateQuestion && <ScreenLoader />}
            <section
                className={`SINGLE_QUESTION bg-all-children grid min-w-[680px] grid-cols-question justify-items-center gap-2 text-gray-300 ${statusClasses}`}
            >
                <section className="flex h-12 w-full items-center justify-center bg-primary-bg">
                    <SelectInput
                        name="status"
                        value={currentStatus}
                        onChange={handleOnChangeStatus}
                        options={[
                            ...possibleStatus.map((status) => ({
                                label: capitalizeFirstLetter(status),
                                value: status,
                            })),
                        ]}
                        className={`h-full w-full bg-primary-bg py-2 pl-2 text-sm outline-none`}
                    />
                </section>
                <a
                    target="_blank"
                    href={tufLink}
                    className={`hide-overflow-words flex w-full items-end justify-start bg-primary-bg p-2 px-4 pt-3 transition-all duration-300 ${!tufLink && "pointer-events-none"} ${tufLink && "underline underline-offset-8 hover:underline-offset-[9px]"}`}
                >
                    {title}
                </a>

                <div className="flex w-full items-center justify-center bg-primary-bg p-2 px-1">
                    <span
                        className={`flex w-[90%] items-center justify-center rounded-2xl border py-1 text-xs text-white ${difficultyColor}`}
                    >
                        {capitalizeFirstLetter(difficulty)}
                    </span>
                </div>
                <button onClick={handleOpenNotesModal} className="flex w-full items-center justify-center bg-primary-bg p-2 px-1">
                    {notes && (
                        <FaNoteSticky
                            className={`text-xl ${currentStatus === "pending" ? "text-primary-button" : "text-primary-button"}`}
                        />
                    )}

                    {!notes && <span>-</span>}
                </button>
                <a
                    target="_blank"
                    href={videoLink}
                    className={`flex w-full items-center justify-center bg-primary-bg p-2 px-1 ${!videoLink && "pointer-events-none"}`}
                >
                    {videoLink && <img src={youtubeImg} alt="link1" className="h-5 w-5" />}
                    {!videoLink && <span>-</span>}
                </a>
                <a
                    target="_blank"
                    href={quelink2}
                    className={`flex w-full items-center justify-center bg-primary-bg p-2 px-1 ${!quelink2 && "pointer-events-none"}`}
                >
                    {quelink2 && linkImageSrc && <img src={linkImageSrc} alt="PRACTICE_LINK" className="h-6 w-6" />}
                    {quelink2 && !linkImageSrc && (
                        <span>
                            <HiExternalLink className="text-2xl text-primary-button" />
                        </span>
                    )}
                    {!quelink2 && <span>-</span>}
                </a>

                <EditAndDeleteQuestion question={question} />
            </section>
        </>
    );
};
export default SingleQuestion;
