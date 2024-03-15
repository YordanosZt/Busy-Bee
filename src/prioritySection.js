let data = JSON.parse(localStorage.getItem("data"));

let highPriorityData = data.filter((item) => {
    return item.priority == "high";
});

let mediumPriorityData = data.filter((item) => {
    return item.priority == "medium";
});

let lowPriorityData = data.filter((item) => {
    return item.priority == "low";
});

let nonePriorityData = data.filter((item) => {
    return item.priority == "none";
});

let unsetPriorityData = data.filter((item) => {
    return item.priority == "";
});

highPriorityData.forEach((el) => handleTaskBox(priorityHighContainer, el));
mediumPriorityData.forEach((el) => handleTaskBox(priorityMediumContainer, el));
lowPriorityData.forEach((el) => handleTaskBox(priorityLowContainer, el));
nonePriorityData.forEach((el) => handleTaskBox(priorityNoneContainer, el));
unsetPriorityData.forEach((el) => handleTaskBox(priorityUnsetContainer, el));

function handleTaskBox(parent, data) {
    let tagsList = data.tags.map((tag) => `<li class="tag__item">#${tag}</li>`);

    let taskBox = createTaskBox({
        title: data.title,
        desc: data.desc,
        priority: data.priority,
        tagsList: tagsList,
        dueDate: data.dueDate,
        taskId: data.Id,
        isChecked: data.isChecked,
    });

    parent.innerHTML += taskBox;
}

function createTaskBox({
    title,
    desc,
    priority,
    tagsList,
    dueDate,
    taskId,
    isChecked,
}) {
    return `<div class="task-box ${
        isChecked ? "checked" : ""
    }" data-task-id="${taskId}" data-priority-value="${priority}">
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
                            class="task-box__delete task-box__icon"
                            src="/delete-icon.png"
                            alt="menu icon"
                        />
                        <p class="task-box__date">Due: ${dueDate}</p>
                    </div>
                </div>`;
}
