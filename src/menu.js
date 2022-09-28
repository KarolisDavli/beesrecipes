import {page} from "./index";
import clearContent from "./clearContent";
import carrot from "./img/carrot.png";

const renderMenu = () => {
  const menuBackground = document.createElement("div");
  menuBackground.classList.add("feature-background");
  const menuText = document.createElement("div");
  menuText.classList.add("container");
  const centerContainer = document.createElement("div");
  centerContainer.classList.add("menu");
  const h1 = document.createElement("h1");
  const text = document.createElement("p");
  const menuImage = document.createElement("img");
  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  const menuItems = [
    [
      "Grilled Halloumi",
      "Grilled Halloumi with a cherry tomato chutney & croûtes.",
    ],
    [
      "Pot of Mussels",
      "Small portion of fresh Sicilian mussels, cooked in white wine, anchovy butter, lemon and black pepper.",
    ],
    [
      "Pulled Pork Bun",
      "250g local pulled pork, house braised for 3 hour, fried onions, double Emmental cheese, rucola, tomatoes & mayo. Served in a sesame brioche bun.",
    ],
    [
      "Fresh calamari salad",
      "Grilled calamari, avocado, tomatoes, red peppers, cucumbers, mixed leaves, marjoram, pernod mayo & lemon.",
    ],
  ];

  h1.innerText = "Welcome to Bees’ Recipes";
  text.innerText =
    "Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ";

  menuItems.map((i) => {
    const menuItemContainer = document.createElement("div");
    const menuItemTitle = document.createElement("h3");
    const menuItemDesc = document.createElement("p");

    menuItemTitle.innerText = i[0];
    menuItemDesc.innerText = i[1];

    menuItemContainer.append(menuItemTitle, menuItemDesc);
    menuList.append(menuItemContainer);
  });

  menuImage.src = carrot;
  menuText.append(h1, text, menuImage);

  menuBackground.append(menuList);
  centerContainer.append(menuText, menuBackground);
  page.append(centerContainer);

  console.log("menu rendered");
};

export default renderMenu;
