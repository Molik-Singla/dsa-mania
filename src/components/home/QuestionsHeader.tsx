import useQuestions from "../../hooks/useQuestions";
import SearchQuestion from "./SearchQuestion";

const QuestionsHeader = () => {
    const { data: questions } = useQuestions();
    const markedForRevision = questions?.filter((question) => question.status === "revisit").length || 0;
    const doneQuestions = questions?.filter((question) => question.status === "done").length || 0;
    const totalQuestions = questions?.length || 0;

    return (
        <section className="QUESTIONS_HEADER flex w-full items-center justify-between bg-secondary-bg p-4">
            <p>
                <span className="">( {doneQuestions}</span>
                <span> / </span>
                <span>{totalQuestions} )</span>
            </p>

            <section className="flex w-5/12 items-center gap-4">
                <SearchQuestion />
                <p className="min-w-fit">
                    <span>Marked for Revision : </span>
                    <span>{markedForRevision}</span>
                </p>
            </section>
        </section>
    );
};
export default QuestionsHeader;
