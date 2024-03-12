const addTasksMainBtn = document.getElementById("add-tasks-btn");

// =================================
//              PANEL
// =================================
const panel = document.getElementById("panel");
const panelTitle = document.querySelector(".panel__title");

const panelCloseBtns = [
    document.getElementById("panel__bg"),
    document.getElementById("panel__close"),
];

// Panel inputs
const panelTitleInput = document.querySelector(".panel__title-input"),
    panelDescInput = document.querySelector(".panel__description-input"),
    panelTagsInput = document.querySelector(".panel__tag-input"),
    panelDueDateInput = document.querySelector(".panel__due-date-input");

const priorityMenu = document.querySelector(".priority__menu");

// Panel Btns
const addTasksPanelBtn = document.getElementById("panel__add-task");

// priority
const priorityBtn = document.querySelector(".priority__btn");
const priorityItems = document.querySelectorAll(".priority__item");

// =================================
//              TASKS
// =================================
const tasksContainer = document.querySelector(".tasks-container");
