// On load
let data_deserialized = JSON.parse(localStorage.getItem("data"));

if (data_deserialized != null) {
    data_deserialized.forEach((taskData) => {
        let tagsList = taskData.tags.map(
            (tag) => `<li class="tag__item">#${tag}</li>`
        );

        let taskBox = createTaskBox({
            title: taskData.title,
            desc: taskData.desc,
            priority: taskData.priority,
            tagsList: tagsList.join(""),
            dueDate: taskData.dueDate,
            taskId: taskData.Id,
        });

        tasksContainer.innerHTML += taskBox;
    });
}

// =============================
//      PANEL OPEN / CLOSE
// =============================

addTasksMainBtn.onclick = () => OpenPanel();

panelCloseBtns.forEach((btn) => {
    btn.onclick = () => ClosePanel();
});

function OpenPanel() {
    panel.classList.add("active");
    ResetPanel();
}

function ClosePanel() {
    panel.classList.remove("active");
}

// ========== Panel Controls ==========

// Priority

priorityBtn.onclick = () => {
    priorityMenu.classList.add("active");
};

document.onclick = (e) => {
    if (!priorityMenu.classList.contains("active") || e.target == priorityBtn)
        return;

    if (e.target != priorityMenu) {
        priorityMenu.classList.remove("active");
    }
};

priorityItems.forEach((item) => {
    item.onclick = () => {
        priorityItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        priorityValue = item.dataset.priorityValue;
    };
});

// =============================
//   DATA SAVE AND TASK CREATE
// =============================

addTasksPanelBtn.onclick = () => {
    let data;

    if (JSON.parse(localStorage.getItem("data")) != null) {
        data = JSON.parse(localStorage.getItem("data"));
    } else {
        data = [];
    }

    // Guard close if title is empty
    if (panelTitleInput.value.trim().length == 0) return;

    // Tag
    let tagValues;

    tagValues = panelTagsInput.value.split(",").map((value) => value.trim());

    // Random ID
    let taskId = Math.floor(Math.random() * 100000000);

    // Data
    let taskData = {
        title: panelTitleInput.value,
        desc: panelDescInput.value,
        priority: priorityValue,
        tags: tagValues,
        dueDate: panelDueDateInput.value,
        creationDate: "",
        Id: taskId,
    };

    data.push(taskData);

    // Create task and add to tasks container

    // Tags List
    let tagsList = taskData.tags.map(
        (tag) => `<li class="tag__item">#${tag}</li>`
    );

    let taskBox = createTaskBox({
        title: taskData.title,
        desc: taskData.desc,
        priority: taskData.priority,
        tagsList: tagsList.join(""),
        dueDate: taskData.dueDate,
        taskId: taskData.Id,
    });

    tasksContainer.innerHTML += taskBox;

    // Local Storage
    let data_serialized = JSON.stringify(data);
    localStorage.setItem("data", data_serialized);

    ResetPanel();
    ClosePanel();
};

function ResetPanel() {
    panelTitle.textContent = "Add a task";
    panelTitleInput.value = "";
    panelDescInput.value = "";
    panelTagsInput.value = "";
    panelDueDateInput.value = "";

    priorityValue = "";

    priorityItems.forEach((item) => item.classList.remove("active"));

    saveEditsBtn.style.display = "none";
    addTasksPanelBtn.style.display = "block";
}

function createTaskBox({ title, desc, priority, tagsList, dueDate, taskId }) {
    return `<div class="task-box" data-task-id="${taskId}" data-priority-value="${priority}">
                    <div class="task-box__header">
                        <img
                            class="task-box__circle"
                            src="/circle-icon.png"
                            alt="circle icon"
                        />
                        <h3 class="task-box__title">${title}</h3>
                    </div>

                    <ul class="task-box__tags-container">
                        ${tagsList}
                    </ul>

                    <p class="task-box__description">${desc}</p>

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
                </div>`;
}
