const panelOpenClose = () => {
    const addTasksMainBtn = document.getElementById("add-tasks__main-btn");
    const addTasksPanel = document.getElementById("add-task-panel");

    const panelTitle = document.querySelector(".add-task__title");
    const titleInput = document.querySelector(".add-task__title-input");
    const descInput = document.querySelector(".add-task__description-input");
    const dueDateInput = document.querySelector(".add-task__due-date-input");
    const tagInput = document.querySelector(".add-task__tag-input");
    const priorityBtns = document.querySelectorAll(".add-task__priority-text");

    const addTaskBtn = document.querySelector("#add-task__panel-btn");
    const saveEditsBtn = document.querySelector("#add-task__panel-edit-btn");

    addTasksMainBtn.onclick = () => {
        addTasksPanel.classList.add("active");

        panelTitle.textContent = "Add a task";
        titleInput.value =
            descInput.value =
            dueDateInput.value =
            tagInput.value =
                "";
        priorityBtns.forEach((btn) => btn.classList.remove("active"));
        addTaskBtn.style.display = "block";
        saveEditsBtn.style.display = "none";
    };

    const addTasksPanelClose = [
        document.getElementById("add-task__bg"),
        document.getElementById("add-task__close"),
    ];

    addTasksPanelClose.forEach((el) => {
        el.onclick = () => addTasksPanel.classList.remove("active");
    });
};

export default panelOpenClose;
