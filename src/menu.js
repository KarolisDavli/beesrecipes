import {page} from "./index";
import clearContent from "./clearContent";
import carrot from "./img/carrot.png";

const renderMenu = () => {
  const centerContainer = document.createElement("div");
  centerContainer.classList.add("menu");
  centerContainer.classList.add("container");
  const h1 = document.createElement("h1");
  const text = document.createElement("p");
  const menuImage = document.createElement("img");

  h1.innerText = "Welcome to Bees’ Recipes";
  text.innerText =
    "Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ";

  menuImage.src = carrot;
  centerContainer.append(h1, text, menuImage);
  page.append(centerContainer);

  console.log("menu rendered");
  return centerContainer;
};

export default renderMenu;
