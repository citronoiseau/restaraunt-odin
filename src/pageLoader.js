import createHeader from "./header";
import createHome from "./home";
import createFooter from "./footer";
export default function pageLoader() {
  createHeader();
  createHome();
  createFooter();
}
