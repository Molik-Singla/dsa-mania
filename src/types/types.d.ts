export type AuthValues = {
    email: string;
    password: string;
};

export type QuestionStatus = "pending" | "done" | "revisit";
export type QuestionDifficulty = "easy" | "medium" | "hard";
export type QuestionCategory =
    | "basic"
    | "array"
    | "string"
    | "recusion"
    | "linked list"
    | "stack"
    | "queue"
    | "graphs"
    | "trees"
    | "hashing"
    | "heaps"
    | "dynamic programming";

export interface Question {
    _id: string;
    title: string;
    category: QuestionCategory;
    notes: string;
    difficulty: QuestionDifficulty;
    status: QuestionStatus;
    quelink2: string;
    videoLink: string;
    tufLink: string;
    createdAt?: Date;
}

// export interface QuestionInputValues extends Omit<Question, "_id"> {}
export interface QuestionInputValues {
    title: string;
    category: QuestionCategory;
    notes: string;
    difficulty: QuestionDifficulty;
    status: QuestionStatus;
    quelink2: string;
    videoLink: string;
    tufLink: string;
}

// For update the question , we can either update complete question or only just status
export type UpdateQuestionToServerProps = {
    questionId: string;
    updatedValue: QuestionInputValues | { status: QuestionStatus };
};
