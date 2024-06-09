import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Hooks and Slice
import useNetworkState from "../../hooks/useNetworkState";

// Components
import AuthInput from "../login/AuthInput";
import SelectInput from "../common/SelectInput";
import ModalLayout from "../ui/ModalLayout";

// Utils
import { possibleCategories, possibleDifficulty, possibleStatus } from "../../utils/constants";
import { capitalizeFirstLetter } from "../../helpers/commonFunctions";
import { QuestionInputValues } from "../../types/types";
import { toastError } from "../../helpers/toastFunctions";

// Types / Interfaces
interface QuestionOperationModalProps {
    defaultValues?: QuestionInputValues;
    onClose: () => void;
    onSubmit: (inputValue: QuestionInputValues) => void;
}

const QuestionOperationModal = ({ defaultValues, onClose, onSubmit }: QuestionOperationModalProps) => {
    const { isOnline } = useNetworkState();
    const [inputValues, setInputValues] = useState<QuestionInputValues>({
        title: defaultValues?.title || "",
        category: defaultValues?.category || "array",
        status: defaultValues?.status || "pending",
        difficulty: defaultValues?.difficulty || "easy",
        quelink2: defaultValues?.quelink2 || "",
        videoLink: defaultValues?.videoLink || "",
        tufLink: defaultValues?.tufLink || "",
        notes: defaultValues?.notes || "",
    });
    const titleInputRef = useRef<HTMLInputElement>(null);

    const isEdited = defaultValues;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitOnEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") handleOnSubmit(e);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputValues.title) return toastError({ message: "Title is required" });
        onSubmit(inputValues);
    };

    useEffect(() => {
        if (titleInputRef.current) titleInputRef.current.focus();
    }, []);

    return createPortal(
        <ModalLayout>
            <section className="flex h-auto w-[60%] min-w-[560px] flex-col gap-5 rounded-lg border border-gray-800 bg-secondary-bg p-10">
                <form onKeyDown={handleSubmitOnEnter} onSubmit={handleOnSubmit} className="flex flex-col gap-5">
                    <section className="MODAL_HEADER mb-4 flex w-full items-center justify-between border-b border-gray-500 pb-4 font-semibold">
                        <p className="text-2xl">{isEdited ? "Edit a Question" : "Add a Question"}</p>
                        <section className="flex items-center justify-end gap-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-md border border-gray-500 bg-transparent px-8 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary-bg"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                disabled={!isOnline}
                                className="disable-button rounded-md bg-primary-button px-8 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary-button"
                            >
                                {isEdited ? "Edit Question" : "Add Question"}
                            </button>
                        </section>
                    </section>

                    {/* MODAL INPUTS */}
                    <AuthInput
                        placeholder="Question Title"
                        name="title"
                        value={inputValues.title}
                        onChange={handleOnChange}
                        ref={titleInputRef}
                    />

                    <section className="flex gap-4">
                        <SelectInput
                            name="category"
                            value={inputValues.category}
                            onChange={handleOnChange}
                            options={[
                                ...possibleCategories.map((category) => ({
                                    label: capitalizeFirstLetter(category),
                                    value: category,
                                })),
                            ]}
                        />
                        <SelectInput
                            name="status"
                            value={inputValues.status}
                            onChange={handleOnChange}
                            options={[
                                ...possibleStatus.map((status) => ({
                                    label: capitalizeFirstLetter(status),
                                    value: status,
                                })),
                            ]}
                        />
                        <SelectInput
                            name="difficulty"
                            value={inputValues.difficulty}
                            onChange={handleOnChange}
                            options={[
                                ...possibleDifficulty.map((difficulty) => ({
                                    label: capitalizeFirstLetter(difficulty),
                                    value: difficulty,
                                })),
                            ]}
                        />
                    </section>

                    <AuthInput placeholder="Practice Link" name="quelink2" value={inputValues.quelink2} onChange={handleOnChange} />

                    <section className="flex gap-4">
                        <AuthInput placeholder="Video Link" name="videoLink" value={inputValues.videoLink} onChange={handleOnChange} />
                        <AuthInput placeholder="TUF Link" name="tufLink" value={inputValues.tufLink} onChange={handleOnChange} />
                    </section>
                    <textarea
                        className={`w-full rounded-md border border-gray-600 bg-transparent p-2 px-4 text-sm text-gray-300 outline-none focus-within:border-primary-button`}
                        name="notes"
                        id="notes"
                        placeholder="Notes..."
                        rows={3}
                        value={inputValues.notes}
                        onChange={handleOnChange}
                    ></textarea>
                </form>
            </section>
        </ModalLayout>,
        document.getElementById("modal")!,
    );
};
export default QuestionOperationModal;
