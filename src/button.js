const renderButton = () => {
  const button = document.createElement("button");
  return button;
};

const primaryButton = () => {
  const primary = renderButton();
  primary.textContent = "Book A Table";
  primary.classList.add("btn");
  primary.classList.add("primary");
  return primary;
};

const secondaryButton = () => {
  const secondary = renderButton();
  secondary.textContent = "View Menu";
  secondary.classList.add("btn");
  secondary.classList.add("secondary");
  return secondary;
};

const buttonBlock = () => {
  const btnBlock = document.createElement("div");
  btnBlock.classList.add("btn-block");
  btnBlock.append(primaryButton(), secondaryButton());
  return btnBlock;
};

export {primaryButton, secondaryButton, buttonBlock};
