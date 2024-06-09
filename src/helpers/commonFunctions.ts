export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getTimeFromSecondsToMiliseconds = (seconds: number): number => {
    return seconds * 1000;
};
