const burger = document.getElementById("burger") as HTMLDivElement;
const sidebar = document.getElementById("side-nav") as HTMLDivElement;

const menuEventListener = (): void => {
  if (burger && sidebar)
    burger.addEventListener("click", () => (sidebar.style.width = "250px"));
  document.onclick = function (e) {
    const target = e.target as Element;
    if (!target.classList.contains("navigation")) sidebar.style.width = "0";
  };
};

export default menuEventListener;
