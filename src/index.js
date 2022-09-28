import "./styles/styles.css";
import "./styles/reset.css";
import "./styles/nav.css";
import "./styles/buttons.css";
import "./styles/home.css";
import "./styles/features.css";
import "./styles/menu.css";
import printMe from "./print.js";
import {loadPage} from "./loadPage.js";

const page = document.querySelector("#content");

//Render page
loadPage();

export {page};
