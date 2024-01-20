export default function createContact() {
  const main = document.querySelector("#content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");
  main.appendChild(contactContainer);

  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Contact us!";
  contactContainer.appendChild(contactHeading);

  const information = document.createElement("div");
  information.classList.add("info");
  contactContainer.appendChild(information);

  const adress = createInfo(
    "22, totally real street, totally real city, totally real country, 78520",
    information
  );
  const phone = createInfo("+1 786 456 334", information);
  const email = createInfo("totallyrealemail@email.com", information);

  const entrancePhoto = document.createElement("img");
  entrancePhoto.src = "images/entrance.jpg";
  entrancePhoto.alt = "Our entrance";
  information.appendChild(entrancePhoto);
}

function createInfo(text, parent) {
  const info = document.createElement("div");
  info.textContent = text;
  parent.appendChild(info);
  return info;
}
