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
import { currentEvent, eventActive } from "./assets/documents/event";
import eventPage from "./pages/eventPage";
import { banner, bannerType } from "./assets/documents/banner";
import joinPage from "./pages/joiningPage";

// fire once dom loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMCL Successful");
  const app = document.getElementById("app") as HTMLDivElement;
  const ver = document.getElementById("version") as HTMLParagraphElement;
  const verMobile = document.getElementById(
    "versionMobile"
  ) as HTMLParagraphElement;

  const eventItem = document.getElementById("event-list-item") as HTMLLIElement;
  const sidebar = document.getElementById("sidebar") as HTMLDivElement;
  const bannerEl = document.getElementById("banner") as HTMLDivElement;
  const pinned = document.getElementById("pinned") as HTMLDivElement;

  if (app) {
    ver.innerHTML += latestVersion();
    verMobile.innerHTML += latestVersion();
    displayBase();
    menuEventListener();
    if (banner && banner.length > 0) {
      bannerEl.style.display = "block";
      bannerEl.style.setProperty(
        "background-color",
        `var(--${bannerType.toLowerCase().split(" ").join("-")}-banner)`
      );
      bannerEl.innerHTML = `<p class="text text-shadow text-center !text-white h-full">${banner}</p>`;
      pinned.style.marginTop = "30px";
    }

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

    router.addRoute("/join", () => {
      app.innerHTML = joinPage();
    });

    if (eventActive === true) {
      let eventAnchor = `<a class="${currentEvent
        .toLowerCase()
        .split(" ")
        .join("-")}" href="./event">${currentEvent}</a>`;
      eventItem.innerHTML = eventAnchor;
      const sideElement = document.createElement("a");
      sideElement.classList.add(
        "text",
        "text-shadow",
        "block",
        "font-light",
        "sidebar-link",
        `${currentEvent.toLocaleLowerCase().split(" ").join("-")}`
      );
      sideElement.href = "./event";
      sideElement.innerHTML = currentEvent;
      sidebar.appendChild(sideElement);
      sidebar;
      router.addRoute("/event", () => {
        app.innerHTML = eventPage();
      });
    } else eventItem.remove();

    console.log("App loaded");

    // handle initial route based on current url
    router.route(window.location.pathname);
  }
});
