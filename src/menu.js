export default function createMenu() {
  const main = document.querySelector("#content");
  const menuLogo = document.createElement("div");
  menuLogo.textContent = "Our menu";
  main.appendChild(menuLogo);
}
