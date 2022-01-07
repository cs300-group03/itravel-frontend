export const formatDate = (inputDate) => {
    const dateType = new Date(inputDate);
    const date = dateType.getDate();
    const month = dateType.getMonth() + 1;
    const year = dateType.getFullYear();
    return `${formatSmallDateMonth(date)}/${formatSmallDateMonth(month)}/${year}`;
} 

const formatSmallDateMonth = (input) => {
    return input < 10 ? `0${input}` : input;
}