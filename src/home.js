import {buttonBlock} from "./button.js";
import cuttingBoard from "./img/cuttingBoard.png";

const renderHome = () => {
  const homeDiv = document.createElement("div");
  const bgContainer = document.createElement("div");
  const left = document.createElement("div");
  const heading1 = document.createElement("h1");
  const text = document.createElement("p");
  const image = document.createElement("img");

  image.src = cuttingBoard;
  left.classList.add("left-content");
  bgContainer.classList.add("home-background");
  homeDiv.classList.add("home-page");
  homeDiv.classList.add("container");
  heading1.textContent = "Food from the Heart to the Heart";
  text.textContent =
    "Taking our love for food, mixing it up with best ingredients and serving it to you";

  left.append(heading1, text, buttonBlock());
  homeDiv.append(left, image);
  bgContainer.append(homeDiv);

  return bgContainer;
};

export default renderHome;
