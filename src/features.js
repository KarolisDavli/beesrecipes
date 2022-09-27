import bellpeper from "./img/bellpeper.svg";
import leek from "./img/leek.svg";
import cauliflower from "./img/cauliflower.svg";

const features = () => {
  const featureBlock = document.createElement("div");
  featureBlock.classList.add("feature-block");
  const featureBackground = document.createElement("div");
  featureBackground.classList.add("feature-background");
  const heading2 = document.createElement("h2");
  heading2.textContent = "Make it You own";

  const featureList = [
    [bellpeper, "Straight from the garden products"],
    [leek, "NO GMO"],
    [cauliflower, "Supporting Local Farmers"],
  ];

  featureList.forEach((i) => {
    const featureItemImage = document.createElement("img");
    const featureItemText = document.createElement("p");
    const featureItemContainer = document.createElement("div");
    featureItemContainer.classList.add("feature-item-container");

    featureItemImage.src = i[0];
    featureItemText.innerHTML = i[1];

    featureItemContainer.append(featureItemImage, featureItemText);
    featureBlock.append(featureItemContainer);
  });

  featureBackground.append(heading2, featureBlock);

  return featureBackground;
};

export default features;
