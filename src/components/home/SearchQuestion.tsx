// Components
import { useEffect, useRef, useState } from "react";

// Hooks and Slice
import useQuestions from "../../hooks/useQuestions";
import { useQueryClient } from "@tanstack/react-query";

// Components
import AuthInput from "../login/AuthInput";

// Utils
import { possibleDifficulty, possibleStatus } from "../../utils/constants";

// Types / Interfaces
import { Question } from "../../types/types";

const SearchQuestion = () => {
    // States and Variables
    const queryClient = useQueryClient();
    const { data: questions, fetchStatus, isPending } = useQuestions();
    const [searchValue, setSearchValue] = useState<string>("");
    const questionsRef = useRef<Question[]>([]);

    const filterQuestionsByStatus = (status: string) => {
        queryClient.setQueryData(["questions"], () => {
            const newQuestions = questionsRef.current.filter((ques) => ques.status === status);
            const finalData = { questions: newQuestions };
            return finalData;
        });
    };

    const filterQuestionsByDifficulty = (difficulty: string) => {
        queryClient.setQueryData(["questions"], () => {
            const newQuestions = questionsRef.current.filter((ques) => ques.difficulty === difficulty);
            const finalData = { questions: newQuestions };
            return finalData;
        });
    };

    const filterQuestionsByTitle = (title: string) => {
        queryClient.setQueryData(["questions"], () => {
            const newQuestions = questionsRef.current.filter((ques) =>
                ques.title.toLowerCase().trim().includes(title.toLowerCase().trim()),
            );
            const finalData = { questions: newQuestions };
            return finalData;
        });
    };

    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchValue(value);

        if ([...possibleStatus].includes(value)) filterQuestionsByStatus(value);
        else if ([...possibleDifficulty].includes(value)) filterQuestionsByDifficulty(value);
        else if (value !== "") filterQuestionsByTitle(value);
        else queryClient.setQueryData(["questions"], () => ({ questions: questionsRef.current }));
    };

    useEffect(() => {
        // Below it means just set the questionsRef once like cache the questions at starting
        if (questions.length > 0 && questionsRef.current.length === 0) questionsRef.current = questions;
    }, [questions]);

    useEffect(() => {
        // Update questionsRef when the questions updated and freshly fetched ( Updating the local cache )
        if (fetchStatus === "idle" && !isPending) questionsRef.current = questions;
    }, [fetchStatus, isPending]);

    return (
        <>
            <AuthInput
                name="search"
                placeholder="Search by Title, Status, Difficuilty"
                value={searchValue}
                onChange={handleOnChangeSearch}
            />
        </>
    );
};
export default SearchQuestion;
