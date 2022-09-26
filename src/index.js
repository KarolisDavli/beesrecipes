import "./styles/styles.css";
import printMe from "./print.js";

const test = (() => {
  const page = document.querySelector("#content");
  const msg = document.createElement("p");
  const button = document.createElement("button");
  button.textContent = "Print me";
  button.addEventListener("click", printMe);
  msg.textContent = "Webpack loads";
  page.append(msg, button);
})();
