export default function createHeader() {
  const header = document.querySelector("header");
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  header.appendChild(navbar);
  const links = document.createElement("ul");
  navbar.appendChild(links);

  const homeLink = createLink("Home", "homeLink", links);
  homeLink.classList.add("active");
  const menuLink = createLink("Menu", "menuLink", links);
  const contactLink = createLink("Contact", "contactLink", links);

  [homeLink, menuLink, contactLink].forEach((link) => {
    link.addEventListener("click", () => {
      [homeLink, menuLink, contactLink].forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

function createLink(text, className, parent) {
  const link = document.createElement("li");
  link.classList.add(className);
  link.textContent = text;
  parent.appendChild(link);
  return link;
}
