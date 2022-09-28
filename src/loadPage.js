import nav from "./nav.js";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import features from "./features.js";
import star from "./img/star.svg";
import {page} from "./index.js";

const body = document.getElementsByTagName("BODY")[0];

const loadPage = () => {
  body.prepend(nav().nav);
  page.append(renderHome());
  console.log(body);
};

export {loadPage};
