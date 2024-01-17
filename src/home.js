export default function createHome() {
  const main = document.querySelector("#content");
  const logoContainer = document.createElement("div");
  const logo = document.createElement("h1");
  logo.textContent = "Sea&See";
  logoContainer.classList.add("logoContainer");
  main.appendChild(logoContainer);
  logoContainer.appendChild(logo);
}
