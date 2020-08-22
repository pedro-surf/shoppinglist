const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export const getDateString = (date: Date | string) => {
    if (typeof (date) === "string") {
        let dateType = new Date(date);
        return `${dateType.getDate()} ${monthNames[dateType.getMonth()]}, ${dateType.getFullYear()}`
    }
    return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`
}