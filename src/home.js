import {buttonBlock} from "./button.js";
import cuttingBoard from "./img/cuttingBoard.png";
import star from "./img/star.svg";

const renderHome = () => {
  const homeDiv = document.createElement("div");
  const homeBackground = document.createElement("div");
  const left = document.createElement("div");
  const heading1 = document.createElement("h1");
  const text = document.createElement("p");
  const image = document.createElement("img");

  // const star1 = document.createElement("img");
  // const star2 = document.createElement("img");
  // const star3 = document.createElement("img");
  // const star4 = document.createElement("img");

  const stars = ["star1", "star2", "star3", "star4"];

  stars.map((i) => {
    let index = stars.indexOf(i);
    i = document.createElement("img");
    i.classList.add("star");
    i.classList.add(`star${index}`);
    i.src = star;
    homeBackground.append(i);
  });

  // stars.forEach((i) => {
  //   i = document.createElement("img");
  //   i.src = star;
  //   console.log(`star`);
  //   i.classList.add(`star${stars.indexOf(i)}`);
  //   homeBackground.append(i);
  // });

  // star1.src = star;
  // star1.classList.add("star1");

  image.src = cuttingBoard;
  left.classList.add("left-content");
  homeBackground.classList.add("home-background");
  homeDiv.classList.add("home-page");
  homeDiv.classList.add("container");
  heading1.textContent = "Food from the Heart to the Heart";
  text.textContent =
    "Taking our love for food, mixing it up with best ingredients and serving it to you";

  left.append(heading1, text, buttonBlock());
  homeDiv.append(left, image);
  homeBackground.append(homeDiv);

  return homeBackground;
};

export default renderHome;
