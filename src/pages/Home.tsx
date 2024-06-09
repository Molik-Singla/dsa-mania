// Components
import QuestionsHeader from "../components/home/QuestionsHeader";
import SingleTopic from "../components/home/SingleTopic";
import Header from "../components/ui/Header";
import ScreenLoader from "../components/animations/ScreenLoader";

// Hooks and Slice
import useQuestions from "../hooks/useQuestions";

// Utils
import { capitalizeFirstLetter } from "../helpers/commonFunctions";
import { possibleCategories } from "../utils/constants";

// Types / Interfaces
import { Question } from "../types/types";

const Home = () => {
    const { data: questions, isFetching } = useQuestions();

    return (
        <>
            {isFetching && <ScreenLoader />}

            <section className="h-screen w-full items-center justify-center overflow-auto pb-10 text-gray-200">
                <Header />

                <section className="box-border flex h-auto w-full justify-center">
                    <section className="h-full w-full max-w-6xl px-8 pt-8 lg:px-2">
                        <QuestionsHeader />

                        <section className="mt-10 flex w-full flex-col gap-5">
                            {possibleCategories.map((category) => {
                                let topicWiseQuestios: Question[] = questions?.filter(
                                    (question: Question) => question.category === category,
                                );

                                return (
                                    <SingleTopic
                                        key={category}
                                        topicName={capitalizeFirstLetter(category)}
                                        topicQuestions={topicWiseQuestios}
                                    />
                                );
                            })}
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
};
export default Home;
