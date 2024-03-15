sideBarTabs.forEach((tab) => {
    tab.onclick = () => {
        sideBarTabs.forEach((tab) => tab.classList.remove("active"));
        tasksSections.forEach((section) => section.classList.remove("active"));

        tab.classList.add("active");
        tasksSections.forEach((section) => {
            if (section.dataset.containerType == tab.dataset.navType) {
                section.classList.add("active");
            }
        });
    };
});
