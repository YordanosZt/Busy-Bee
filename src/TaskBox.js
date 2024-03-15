// =======================
//    PANEL OPEN / CLOSE
// =======================
let editBtn;
let taskBox;
let activeData;
let data;
let activePriorityValue;

tasksContainer.onclick = (e) => {
    if (JSON.parse(localStorage.getItem("data")) != null)
        data = JSON.parse(localStorage.getItem("data"));

    // FOR THE CHECKBOX
    if (e.target.classList.contains("task-box__circle")) {
        taskBox = e.target.parentNode.parentNode;

        taskBox.classList.toggle("checked");

        data.forEach((el) => {
            if (el.Id == taskBox.dataset.taskId) {
                el.isChecked = taskBox.classList.contains("checked")
                    ? true
                    : false;
            }
        });
        localStorage.setItem("data", JSON.stringify(data));
    }

    // FOR DELETING
    else if (e.target.classList.contains("task-box__delete")) {
        taskBox = e.target.parentNode.parentNode;

        data = data.filter((el) => el.Id != taskBox.dataset.taskId);

        tasksContainer.removeChild(taskBox);
        localStorage.setItem("data", JSON.stringify(data));
    }

    // FOR EDITING
    else if (e.target.classList.contains("task-box__edit")) {
        editBtn = e.target;
        taskBox = e.target.parentNode.parentNode;

        data.forEach((el) => {
            if (taskBox.dataset.taskId == el.Id) {
                activeData = el;
            }
        });

        OpenPanel();
        ResetEditPanel({
            title: activeData.title,
            desc: activeData.desc,
            priority: activeData.priority,
            tags: activeData.tags,
            dueDate: activeData.dueDate,
        });
    }
};

saveEditsBtn.onclick = () => {
    // Update Data
    activeData.title = panelTitleInput.value;
    activeData.desc = panelDescInput.value;
    activeData.tags = panelTagsInput.value.split(",");
    activeData.dueDate = panelDueDateInput.value;
    activeData.priority = priorityValue;

    data.forEach((el) => {
        if (el.id == activeData.id) {
            el = activeData;
        }
    });

    // Update Task box
    taskBox.querySelector(".task-box__title").textContent = activeData.title;
    taskBox.querySelector(".task-box__description").textContent =
        activeData.desc;
    taskBox.querySelector(
        ".task-box__date"
    ).textContent = `Due: ${activeData.dueDate}`;

    let tagsList = activeData.tags.map(
        (tag) => `<li class="tag__item">#${tag}</li>`
    );

    taskBox.querySelector(".task-box__tags-container").innerHTML =
        tagsList.join("");
    taskBox.dataset.priorityValue = activeData.priority;

    // Save Data
    let data_serialized = JSON.stringify(data);
    localStorage.setItem("data", data_serialized);

    ClosePanel();
};

function OpenPanel() {
    panel.classList.add("active");
}

function ClosePanel() {
    panel.classList.remove("active");
}

function ResetEditPanel({ title, desc, priority, tags, dueDate }) {
    panelTitle.textContent = "Edit Task";
    panelTitleInput.value = title;
    panelDescInput.value = desc;
    panelDueDateInput.value = dueDate;
    panelTagsInput.value = tags.join(", ");

    priorityItems.forEach((item) => {
        item.classList.remove("active");

        if (priority == item.dataset.priorityValue) {
            item.classList.add("active");
        }
    });

    saveEditsBtn.style.display = "block";
    addTasksPanelBtn.style.display = "none";
}
