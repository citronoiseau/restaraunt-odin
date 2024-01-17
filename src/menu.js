export default function createMenu() {
  const main = document.querySelector("#content");
  const menuLogo = document.createElement("h2");
  menuLogo.textContent = "Our menu";
  main.appendChild(menuLogo);
}
