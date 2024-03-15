// Title child count
let data = JSON.parse(localStorage.getItem("data"));

mainTitleSpan.textContent = data.filter((el) => !el.isChecked).length;

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
