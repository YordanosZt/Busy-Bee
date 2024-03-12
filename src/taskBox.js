const handleTaskBox = () => {
    // const tasksContainer = document.querySelector("tasks-container");

    let data = [];
    data = JSON.parse(localStorage.getItem("data"));

    // Task box
    const taskBoxes = document.querySelectorAll(".task-box");
    const editBtns = document.querySelectorAll(".task-box__edit");

    // Edit panel
    const panel = document.querySelector(".add-task-panel");
    const panelTitle = document.querySelector(".add-task__title");
    const titleInput = document.querySelector(".add-task__title-input");
    const descInput = document.querySelector(".add-task__description-input");
    const dueDateInput = document.querySelector(".add-task__due-date-input");
    const tagInput = document.querySelector(".add-task__tag-input");
    const priorityBtns = document.querySelectorAll(".add-task__priority-text");

    const addTaskBtn = document.querySelector("#add-task__panel-btn");
    const saveEditsBtn = document.querySelector("#add-task__panel-edit-btn");

    let activeData;
    let originalPriorityValue;
    let taskBox;

    editBtns.forEach((btn) => {
        btn.onclick = (e) => {
            console.log(btn);

            taskBox = e.target.parentNode.parentNode;

            data.forEach((item) => {
                if (item.id == taskBox.dataset.taskid) {
                    activeData = item;
                }
            });

            originalPriorityValue = activeData.priority;

            addTaskBtn.style.display = "none";
            saveEditsBtn.style.display = "block";

            panel.classList.add("active");
            panelTitle.textContent = "Edit Task";
            titleInput.value = activeData.title;
            descInput.value = activeData.description;
            dueDateInput.value = activeData.dueDate;
            tagInput.value = activeData.tag.join(",");
            priorityBtns.forEach((btn) => {
                if (btn.dataset.priorityValue == activeData.priority) {
                    priorityBtns.forEach((btn) => {
                        btn.classList.remove("active");
                    });

                    btn.classList.add("active");
                }
            });
        };
    });

    let priorityValue;
    priorityBtns.forEach((btn) => {
        btn.onclick = () => {
            priorityBtns.forEach((btn) => btn.classList.remove("active"));

            btn.classList.add("active");
            priorityValue = btn.dataset.priorityValue;
        };
    });

    saveEditsBtn.onclick = () => {
        // Update data
        activeData.title = titleInput.value;
        activeData.description = descInput.value;
        activeData.dueDate = dueDateInput.value;

        let tagValues = tagInput.value.trim().split(",");

        if (tagValues == "") {
            tagValues = ["Untagged"];
        }
        activeData.tag = tagValues;
        activeData.priority =
            priorityValue == undefined ? originalPriorityValue : priorityValue;

        data.forEach((item) => {
            if (item.id == activeData.id) {
                item = activeData;
            }
        });

        // Update Task box
        taskBox.querySelector(".task-box__title").textContent =
            activeData.title;
        taskBox.querySelector(".task-box__description").textContent =
            activeData.description;

        let tagList = "";

        activeData.tag.forEach((tag) => {
            let tagEl = `<div class="task-box__tag">#${tag}</div>`;

            tagList += tagEl;
        });

        taskBox.querySelector(".task-box__tags-container").innerHTML = tagList;
        taskBox.querySelector(
            ".task-box__date"
        ).textContent = `Due: ${activeData.dueDate}`;
        taskBox.dataset.priorityLevel = activeData.priority;

        // Save Data
        let data_serialized = JSON.stringify(data);
        localStorage.setItem("data", data_serialized);

        // Close Panel
        panel.classList.remove("active");
    };
};

export default handleTaskBox;
