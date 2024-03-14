let data;

if (JSON.parse(localStorage.getItem("data") != null)) {
    data = JSON.parse(localStorage.getItem("data"));
} else {
    data = [];
}

let taskBox;

tasksContainer.onclick = (e) => {
    if (e.target.classList.contains("task-box__delete")) {
        taskBox = e.target.parentNode.parentNode;

        data = data.filter((el) => el.Id != taskBox.dataset.taskId);

        tasksContainer.removeChild(taskBox);
        localStorage.setItem("data", JSON.stringify(data));
    }
};
