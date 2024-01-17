export default function createHeader() {
  const header = document.querySelector("header");
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  header.appendChild(navbar);
  const links = document.createElement("ul");
  navbar.appendChild(links);
  const homeLink = document.createElement("li");
  homeLink.classList.add("homeLink");
  homeLink.textContent = "Home";
  const menuLink = document.createElement("li");
  menuLink.classList.add("menuLink");
  menuLink.textContent = "Menu";
  const contactLink = document.createElement("li");
  contactLink.classList.add("contactLink");
  contactLink.textContent = "Contact";
  links.appendChild(homeLink);
  links.appendChild(menuLink);
  links.appendChild(contactLink);
}
