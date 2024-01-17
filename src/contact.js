export default function createContact() {
  const main = document.querySelector("#content");
  const contactHeading = document.createElement("h3");
  contactHeading.textContent = "Contact us!";
  main.appendChild(contactHeading);
}
