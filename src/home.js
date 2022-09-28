import {buttonBlock} from "./button.js";
import cuttingBoard from "./img/cuttingBoard.png";
import features from "./features.js";
import {page} from "./index";

const renderHome = () => {
  const homePageContent = document.createElement("div");
  homePageContent.classList.add("home");
  const topHomeDiv = document.createElement("div");

  const left = document.createElement("div");
  const heading1 = document.createElement("h1");
  const text = document.createElement("p");
  const image = document.createElement("img");

  image.src = cuttingBoard;
  left.classList.add("left-content");

  topHomeDiv.classList.add("home-page");
  topHomeDiv.classList.add("container");
  heading1.textContent = "Food from the Heart to the Heart";
  text.textContent =
    "Taking our love for food, mixing it up with best ingredients and serving it to you";

  left.append(heading1, text, buttonBlock());
  topHomeDiv.append(left, image);
  homePageContent.append(topHomeDiv, features());
  page.append(homePageContent);

  return homePageContent;
};

export default renderHome;
