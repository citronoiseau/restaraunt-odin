import "./style.css";
import pageLoader from "./pageLoader";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
pageLoader();

const main = document.querySelector("#content");
const homeLink = document.querySelector(".homeLink");
const menuLink = document.querySelector(".menuLink");
const contactLink = document.querySelector(".contactLink");
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
homeLink.addEventListener("click", () => {
  removeAllChildren(main);
  createHome();
});

menuLink.addEventListener("click", () => {
  removeAllChildren(main);
  createMenu();
});

contactLink.addEventListener("click", () => {
  removeAllChildren(main);
  createContact();
});
