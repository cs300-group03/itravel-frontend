export const formatDate = (inputDate) => {
    const dateType = new Date(inputDate);
    const date = dateType.getDate();
    const month = dateType.getMonth() + 1;
    const year = dateType.getFullYear();
    return `${formatSmallDateMonth(date)}/${formatSmallDateMonth(month)}/${year}`;
}

export const formatMomentDate = (inputDate) => {
    const dateType = new Date(inputDate);
    const date = dateType.getDate();
    const month = dateType.getMonth() + 1;
    const year = dateType.getFullYear();
    return `${year}${formatSmallDateMonth(month)}${formatSmallDateMonth(date)}`;
}

const formatSmallDateMonth = (input) => {
    return input < 10 ? `0${input}` : input;
}