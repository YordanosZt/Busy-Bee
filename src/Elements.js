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

const saveEditsBtn = document.getElementById("panel__edit-task");

// priority
const priorityBtn = document.querySelector(".priority__btn");
const priorityItems = document.querySelectorAll(".priority__item");
let priorityValue = "";

// =================================
//              TASKS
// =================================
const tasksContainer = document.querySelector(".tasks-container");

// =================================
//              DETAILS
// =================================
const mainTitleSpan = document.querySelector(".main__title span");

const navBarDate = document.querySelector(".navbar__date");

// =================================
//              TABS
// =================================

// Sections
const tasksSections = document.querySelectorAll(".tasks-section");
const sideBarTabs = document.querySelectorAll(".sidebar__nav-item");

// All tasks
const allTasksContainer = document.querySelector(".all-tasks-container");

// Priority
const priorityHighContainer = document.querySelector(
    ".priority-section-container .high .tasks"
);
const priorityMediumContainer = document.querySelector(
    ".priority-section-container .medium .tasks"
);
const priorityLowContainer = document.querySelector(
    ".priority-section-container .low .tasks"
);
const priorityNoneContainer = document.querySelector(
    ".priority-section-container .none .tasks"
);
const priorityUnsetContainer = document.querySelector(
    ".priority-section-container .unset .tasks"
);
