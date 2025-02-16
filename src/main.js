import "../node_modules/modern-normalize/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/sidebar.css";
import "../styles/components/main.css";
import "../styles/components/tasks.css";
import "../styles/components/detailsBar.css";
import "../styles/components/addTasks.css";
import "../styles/components/timer.css";
import "../styles/utils.css";

import onReload from "./onReload";
import panelOpenClose from "./panelOpenClose";
import handleTaskBox from "./taskBox";
import handlePanel from "./addTaskPanel";

onReload();
panelOpenClose();
handlePanel();
handleTaskBox();

// import "./addTaskPanel";
// import "./taskBox";
