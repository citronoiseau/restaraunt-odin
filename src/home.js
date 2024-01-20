import teamImg from "./images/team.jpg";
import chiefsImg from "./images/chiefs.jpg";
import restaurantImg from "./images/restaurant.jpg";

export default function createHome() {
  const main = document.querySelector("#content");
  const logoContainer = document.createElement("div");

  const logo = document.createElement("h1");
  logo.textContent = "Sea&See";
  logoContainer.classList.add("logoContainer");

  main.appendChild(logoContainer);
  logoContainer.appendChild(logo);

  // about
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("aboutContainer");
  main.appendChild(aboutContainer);

  const aboutMessage = document.createElement("h2");
  aboutMessage.textContent = "Meet the Sea & See Crew:";
  aboutContainer.appendChild(aboutMessage);

  const aboutParagraph = document.createElement("div");
  aboutParagraph.classList.add("aboutParagraph");
  aboutContainer.appendChild(aboutParagraph);

  const aboutOpening = document.createElement("p");
  aboutOpening.textContent =
    "We're not just sushi ninjas, we're a family forged in the fiery kitchens and united by a shared obsession: crafting ocean-inspired masterpieces that tickle your taste buds and awaken your inner mermaid (or merman!).";
  aboutParagraph.appendChild(aboutOpening);

  const aboutChef = document.createElement("p");
  aboutChef.textContent =
    "At the helm, Chef Kenshin, a seasoned sushi sensei with over 20 years of experience, orchestrates the culinary symphony. Don't let his gruff exterior fool you, behind that chef's coat beats a heart of eel sauce and dreams of topping the Tokyo Tower with nigiri!";
  aboutParagraph.appendChild(aboutChef);

  const aboutWaiter = document.createElement("p");
  aboutWaiter.textContent =
    "Steering the service ship, we have Hanako, our resident wine whisperer and laughter champion. She can pair sake with your salmon like a matchmaker with superpowers, and her smile is brighter than a freshly filleted tuna belly (which is saying something!).";
  aboutParagraph.appendChild(aboutWaiter);

  const aboutSecondChef = document.createElement("p");
  aboutSecondChef.textContent =
    "Mastering the art of maki mastery, we have Haru, a sushi sculptor with hands that move like lightning and a dedication to precision that would make a samurai proud. Don't blink, or you might miss his artistry unfold!";
  aboutParagraph.append(aboutSecondChef);

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("imagesContainer");
  aboutContainer.append(imagesContainer);

  const aboutPhoto = document.createElement("img");
  aboutPhoto.src = teamImg;
  aboutPhoto.alt = "Sea & See Crew";
  imagesContainer.appendChild(aboutPhoto);

  const chiefsPhoto = document.createElement("img");
  chiefsPhoto.src = chiefsImg;
  chiefsPhoto.alt = "Our chiefs";
  imagesContainer.appendChild(chiefsPhoto);

  const restaurantPhoto = document.createElement("img");
  restaurantPhoto.src = restaurantImg;
  restaurantPhoto.alt = "Our chiefs";
  imagesContainer.appendChild(restaurantPhoto);

  const closingParagraph = document.createElement("p");
  closingParagraph.textContent =
    "And that's just a taste of the crew! From our seaweed whisperer who coaxes the perfect texture from every sheet to our rice master who fluffs every grain to fluffy perfection, we're all united by one mission: to make your Sea & See experience an unforgettable wave of deliciousness.";
  aboutContainer.appendChild(closingParagraph);

  aboutChef.classList.add("hideOnMobile");
  aboutWaiter.classList.add("hideOnMobile");
  aboutSecondChef.classList.add("hideOnMobile");
  closingParagraph.classList.add("hideOnMobile");

  //working hours
  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hoursContainer");
  main.appendChild(hoursContainer);

  const schedule = document.createElement("div");
  schedule.classList.add("schedule");
  hoursContainer.appendChild(schedule);

  const hoursMessage = document.createElement("h3");
  hoursMessage.textContent = "Working Hours";
  schedule.appendChild(hoursMessage);

  const days = [
    { day: "Monday & Tuesday", openingTime: "10am", closingTime: "8pm" },
    { day: "Wednesday & Thursday", openingTime: "12pm", closingTime: "8pm" },
    { day: "Friday & Saturday", openingTime: "14pm", closingTime: "10pm" },
    { day: "Sunday", openingTime: "Closed" },
  ];
  days.forEach((day) => {
    createWorkingHours(day.day, day.openingTime, day.closingTime);
  });

  function createWorkingHours(day, openingTime, closingTime) {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("dayContainer");
    schedule.appendChild(dayContainer);

    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayContainer.appendChild(dayElement);

    if (openingTime === "Closed") {
      const hours = document.createElement("div");
      hours.textContent = "Closed";
      dayContainer.appendChild(hours);
    } else {
      const hours = document.createElement("div");
      hours.textContent = `${openingTime} - ${closingTime}`;
      dayContainer.appendChild(hours);
    }
  }
}
