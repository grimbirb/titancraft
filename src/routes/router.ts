import Error404 from "../components/Error404";

class Router {
  routes: { [key: string]: Function } = {};
  basePath: string;

  constructor(basePath: string = "") {
    this.basePath = basePath.replace(/\/$/, ""); // remove trailing slash if present
    // detect when user clicks back/forward in the browser, send user to correct path
    window.addEventListener("popstate", () =>
      this.route(window.location.pathname)
    );
  }

  // route user to corresponding path
  route(path: string) {
    path = path.replace(this.basePath, ""); // remove base path before checking routes
    const handler = this.routes[path];
    if (handler) {
      console.log(`[GrimRoute] Routing to ${path}`);
      handler();
    } else this.handle404();
  }

  // display error404 component in the app
  handle404() {
    const app = document.getElementById("app");
    if (app) {
      console.log(`[GrimRoute] Routing to 404`);
      app.innerHTML = Error404();
    }
  }

  // store a path in the routes
  addRoute(path: string, handler: Function) {
    this.routes[this.basePath + path] = handler;
  }
}

const router = new Router(
  window.location.origin.includes("github.io") ? "/titancraft" : "/"
);

export default router;
