import { useState } from "react";

// Components
import SingleQuestion from "./SingleQuestion";
import TopicTableHeader from "./TopicTableHeader";

// Utils
import { HiPlus } from "react-icons/hi";

// Types / Interfaces
import { Question } from "../../types/types";
type SingleTopicProps = {
    topicName: string;
    topicQuestions: Array<Question>;
};

const SingleTopic = ({ topicName, topicQuestions }: SingleTopicProps) => {
    // States and Variables
    const [isQuestionOpen, setIsQuestionOpen] = useState<Boolean>(false);
    const doneQuestions: number = topicQuestions.filter((question) => question.status === "done").length;
    const totalQuestions: number = topicQuestions.length;
    const revisitQuestions: number = topicQuestions.filter((question) => question.status === "revisit").length;

    if (topicQuestions.length === 0) return null;

    return (
        <section className="SINGLE_TOPIC w-full">
            <section
                onClick={() => setIsQuestionOpen((p) => !p)}
                className="SINGLE_TOPIC_DETAIL flex w-full cursor-pointer flex-col justify-start border-b border-gray-500 bg-secondary-bg px-4 py-5 md:flex-row md:items-center md:justify-between"
            >
                <p className="text-xl font-semibold">{topicName}</p>

                <section className="flex w-full items-center justify-end gap-4 md:w-[40%] md:min-w-fit">
                    <div className="flex w-full items-center justify-between gap-9 md:w-4/5 md:justify-evenly">
                        <p>Revision Pending : {revisitQuestions}</p>
                        <p>
                            ( <span>{doneQuestions}</span> / <span>{totalQuestions}</span> )
                        </p>
                    </div>
                    <HiPlus className={`text-2xl transition-all duration-300 ${isQuestionOpen ? "rotate-45" : "rotate-0"}`} />
                </section>
            </section>

            {isQuestionOpen && (
                <section className="TOPIC_QUESTIONS w-full space-y-4 overflow-x-auto bg-secondary-bg p-8">
                    <TopicTableHeader />

                    {topicQuestions.map((question: Question) => {
                        return <SingleQuestion key={question._id} question={question} />;
                    })}
                </section>
            )}
        </section>
    );
};
export default SingleTopic;
