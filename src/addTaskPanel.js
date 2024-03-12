const handlePanel = () => {
    // ========================
    //      ADD TASKS PANEL
    // ========================

    // Main Content
    const panelTitle = document.querySelector(".add-task__title");
    const addTasksPanelBtn = document.getElementById("add-task__panel-btn");
    const panelTitleInput = document.getElementById("add-task__title-input");
    const panelDescriptionInput = document.getElementById(
        "add-task__description-input"
    );
    const addTasksPanel = document.getElementById("add-task-panel");
    const tasksContainer = document.getElementById("tasks-container");

    // ==============================
    //   ADD TASKS PANEL ADDITIONAL
    // ==============================
    const addTaskTagInput = document.querySelector(".add-task__tag-input");
    const addTaskPriorityMenu = document.querySelector(
        ".add-task__priority-menu"
    );
    const addTaskDueDateInput = document.querySelector(
        ".add-task__due-date-input"
    );

    // reseting the panel to 'add task' if it was altered by 'edit task'

    let data = [];

    // get the data from the local storage
    if (localStorage.getItem("data")) {
        let data_deserialized = JSON.parse(localStorage.getItem("data"));
        data = data_deserialized;
    }

    // Add the tasks to the tasks container on load
    data.forEach((el) => {
        // Tags
        let tagList = "";

        el.tag.forEach((tag) => {
            let tagEl = `<div class="task-box__tag">#${tag}</div>`;

            tagList += tagEl;
        });

        let taskBox = createTagBox({
            title: el.title,
            desc: el.description,
            priority: el.priority,
            tagList: tagList,
            dueDate: el.dueDate,
            taskId: el.id,
        });
        tasksContainer.innerHTML += taskBox;
    });

    // =================== Priority ===================
    let priorityValue;

    addTaskPriorityMenu.onclick = (e) => {
        priorityValue = e.target.dataset.priorityValue;

        addTaskPriorityMenu
            .querySelectorAll(".add-task__priority-text")
            .forEach((el) => {
                el.classList.remove("active");
            });

        e.target.classList.add("active");
    };

    // =================== Due-Date ===================
    let dueDateInputEl = document.querySelector(".add-task__due-date-input");

    // When the user clicks on the add task button
    addTasksPanelBtn.onclick = () => {
        // DUE DATE
        let dueDate = dueDateInputEl.value;

        // If the title is empty don't save the task
        if (panelTitleInput.value.trim().length === 0) return;

        // Tag
        let tagValues = addTaskTagInput.value.trim().split(",");

        if (tagValues == "") {
            tagValues = ["Untagged"];
        }

        // Task ID
        let taskId = Math.floor(Math.random() * 1000000);

        // Data Gets saved
        let taskData = {
            title: panelTitleInput.value,
            description: panelDescriptionInput.value,
            priority: priorityValue,
            tag: tagValues,
            dueDate: dueDate,
            creationDate: "",
            id: taskId,
        };

        // Tags
        let tagList = "";

        tagValues.forEach((tag) => {
            let tagEl = `<div class="task-box__tag">#${tag}</div>`;

            tagList += tagEl;
        });

        // Create a task box
        let taskBox = createTagBox({
            title: taskData.title,
            desc: taskData.description,
            priority: taskData.priority,
            tagList: tagList,
            dueDate: taskData.dueDate,
            taskId: taskData.id,
        });

        tasksContainer.innerHTML += taskBox;

        // Reseting
        addTasksPanel.classList.remove("active");
        ResetInputs();

        // Local storage
        data.push(taskData);

        let data_serialized = JSON.stringify(data);
        localStorage.setItem("data", data_serialized);

        location.reload();
    };

    function ResetInputs() {
        panelTitleInput.value = "";
        panelDescriptionInput.value = "";
        priorityValue = "";
        addTaskTagInput.value = "";
        addTaskDueDateInput.value = "";
        addTaskPriorityMenu
            .querySelectorAll(".add-task__priority-text")
            .forEach((el) => {
                el.classList.remove("active");
            });
    }

    function createTagBox({ title, desc, priority, tagList, dueDate, taskId }) {
        return `
        <div class="task-box" data-priority-level="${priority}" data-taskId="${taskId}">
            <div class="task-box__header">
                <img
                    class="task-box__circle"
                    src="/circle-icon.png"
                    alt="circle icon"
                />
                <h3 class="task-box__title">
                    ${title}
                </h3>
            </div>

            <div class="task-box__tags-container">
                ${tagList}
            </div>

            <p class="task-box__description">
                ${desc}
            </p>
            <div class="task-box__footer">
                <img
                    class="task-box__edit task-box__icon"
                    src="/edit-icon.png"
                    alt="edit icon"
                />
                <img
                    class="task-box__menu task-box__icon"
                    src="/menu-icon.png"
                    alt="menu icon"
                />
                <p class="task-box__date">Due: ${dueDate}</p>
            </div>
        </div>
    `;
    }
};

export default handlePanel;
