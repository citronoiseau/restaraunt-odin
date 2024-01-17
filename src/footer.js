export default function createFooter() {
  const footer = document.querySelector("footer");
  const message = document.createElement("div");
  message.textContent = "Created by ";
  const authorLink = document.createElement("a");
  authorLink.textContent = "lemonbirdy";
  authorLink.href = "https://github.com/citronoiseau";
  authorLink.target = "_blank";
  footer.appendChild(message);
  message.appendChild(authorLink);
}
