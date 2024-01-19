export default function createContact() {
  const main = document.querySelector("#content");
  const contactHeading = document.createElement("div");
  contactHeading.textContent = "Contact us!";
  main.appendChild(contactHeading);
}
