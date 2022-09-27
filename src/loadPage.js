import printMe from "./print.js";
import nav from "./nav.js";
import renderHome from "./home.js";
import features from "./features.js";

const loadPage = () => {
  const page = document.querySelector("#content");

  page.append(nav(), renderHome(), features());
};

export default loadPage;
