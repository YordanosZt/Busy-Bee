const addTasksPanelBtn = document.getElementById("add-task__panel-btn");
const panelTitleInput = document.getElementById("add-task__title-input");
const panelDescriptionInput = document.getElementById(
    "add-task__description-input"
);
const addTasksPanel = document.getElementById("add-task-panel");
const tasksContainer = document.getElementById("tasks-container");

let data = [];

if (localStorage.getItem("data")) {
    let data_deserialized = JSON.parse(localStorage.getItem("data"));
    data = data_deserialized;
}

data.forEach((el) => {
    let taskBox = `
        <div class="task-box">
            <div class="task-box__header">
                <img
                    class="task-box__circle"
                    src="/circle-icon.png"
                    alt="circle icon"
                />
                <h3 class="task-box__title" contenteditable>
                    ${el.title}
                </h3>
            </div>

            <p class="task-box__description" contenteditable>
                ${el.description}
            </p>
            <div class="task-box__footer">
                <img
                    class="task-box__edit task-box__icon"
                    src="/edit-icon.png"
                    alt="edit icon"
                />
                <img
                    class="task-box__tag task-box__icon"
                    src="/tag-icon.png"
                    alt="tag icon"
                />
                <img
                    class="task-box__menu task-box__icon"
                    src="/menu-icon.png"
                    alt="menu icon"
                />
                <p class="task-box__date">Jan 01, 2000</p>
            </div>
        </div>`;

    tasksContainer.innerHTML += taskBox;
});

addTasksPanelBtn.onclick = () => {
    let taskData = {
        title: panelTitleInput.value,
        description: panelDescriptionInput.value,
        priority: "",
        tag: [],
        dueDate: "",
        creationDate: "",
        id: "",
    };

    let taskBox = `
        <div class="task-box">
            <div class="task-box__header">
                <img
                    class="task-box__circle"
                    src="/circle-icon.png"
                    alt="circle icon"
                />
                <h3 class="task-box__title" contenteditable>
                    ${panelTitleInput.value}
                </h3>
            </div>

            <p class="task-box__description" contenteditable>
                ${panelDescriptionInput.value}
            </p>
            <div class="task-box__footer">
                <img
                    class="task-box__edit task-box__icon"
                    src="/edit-icon.png"
                    alt="edit icon"
                />
                <img
                    class="task-box__tag task-box__icon"
                    src="/tag-icon.png"
                    alt="tag icon"
                />
                <img
                    class="task-box__menu task-box__icon"
                    src="/menu-icon.png"
                    alt="menu icon"
                />
                <p class="task-box__date">Jan 01, 2000</p>
            </div>
        </div>`;

    tasksContainer.innerHTML += taskBox;

    addTasksPanel.classList.remove("active");
    panelTitleInput.value = "";
    panelDescriptionInput.value = "";

    data.push(taskData);

    let data_serialized = JSON.stringify(data);
    localStorage.setItem("data", data_serialized);
};
