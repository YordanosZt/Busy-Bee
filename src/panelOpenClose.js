const panelOpenClose = () => {
    const addTasksMainBtn = document.getElementById("add-tasks__main-btn");
    const addTasksPanel = document.getElementById("add-task-panel");

    addTasksMainBtn.onclick = () => {
        addTasksPanel.classList.add("active");
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
