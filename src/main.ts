import "./styles/css/main.css";
import displayBase from "./components/DisplayBase";
import router from "./routes/router";
import homePage from "./pages/homePage";
import staffPage from "./pages/staffPage";
import {
  attachEventListeners as modsEListeners,
  modsPage,
} from "./pages/modsPage";
import abovePage from "./pages/abovePage";
import aboutPage from "./pages/aboutPage";
import {
  attachEventListeners as rulesEListeners,
  rulesPage,
} from "./pages/rulesPage";
import logsPage from "./pages/logsPage";
import { latestVersion } from "./assets/documents/logs";
import aboutSitePage from "./pages/aboutSitePage";
import menuEventListener from "./scripts/sidebar";

// fire once dom loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMCL Successful");
  const app = document.getElementById("app") as HTMLDivElement;
  const ver = document.getElementById("version") as HTMLParagraphElement;
  const verMobile = document.getElementById(
    "versionMobile"
  ) as HTMLParagraphElement;

  if (app) {
    ver.innerHTML += latestVersion();
    verMobile.innerHTML += latestVersion();
    displayBase();
    menuEventListener();
    router.addRoute("/", () => {
      app.innerHTML = homePage();
    });

    router.addRoute("/about", () => {
      app.innerHTML = aboutPage();
    });

    router.addRoute("/staff", () => {
      app.innerHTML = staffPage();
    });

    router.addRoute("/mods", () => {
      app.innerHTML = modsPage();
      modsEListeners();
    });

    router.addRoute("/above", () => {
      app.innerHTML = abovePage();
    });

    router.addRoute("/rules", () => {
      app.innerHTML = rulesPage();
      rulesEListeners();
    });

    router.addRoute("/faq", () => {
      app.innerHTML = rulesPage();
      rulesEListeners();
    });

    router.addRoute("/change-logs", () => {
      app.innerHTML = logsPage();
    });

    router.addRoute("/about-site", () => {
      app.innerHTML = aboutSitePage();
    });

    console.log("App loaded");

    // handle initial route based on current url
    router.route(window.location.pathname);
  }
});
