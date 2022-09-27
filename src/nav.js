import logo from "./img/logo.svg";

const renderNav = () => {
  const nav = document.createElement("nav");
  const menuItems = document.createElement("ul");
  const logoImage = document.createElement("img");
  logoImage.src = logo;

  const logoLink = document.createElement("li");
  const navLinkMenu = document.createElement("li");
  const navLinkContact = document.createElement("li");
  const navLinkAbout = document.createElement("li");

  logoLink.append(logoImage);
  menuItems.append(navLinkMenu, navLinkContact, navLinkAbout);

  navLinkMenu.textContent = "Menu";
  navLinkContact.textContent = "Contact";
  navLinkAbout.textContent = "About";

  nav.append(logoLink, menuItems);

  return nav;
};

export default renderNav;
