import printMe from "./print.js";
import nav from "./nav.js";
import renderHome from "./home.js";

const loadPage = () => {
  const page = document.querySelector("#content");
  const msg = document.createElement("p");
  const button = document.createElement("button");
  button.textContent = "Print me";
  button.addEventListener("click", printMe);
  msg.textContent = "Webpack loads";
  page.append(nav(), renderHome());
};

export default loadPage;
