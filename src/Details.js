// Title child count
mainTitleSpan.textContent = tasksContainer.childElementCount;

// Nav Day
const date = new Date();
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Oct",
    "Sep",
    "Nov",
    "Dec",
];

let monthIdx = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();

let dateText = `${months[monthIdx]} ${day}, ${year}`;

navBarDate.textContent = dateText;
