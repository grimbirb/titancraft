import mods from "../assets/documents/mods";
import displayMods from "../components/DisplayMods";

let status: string = "";
let query: string = "";
const versions: string[] = [...new Set(mods.map((mod) => mod.version))].sort(
  (a, b) => b.localeCompare(a, undefined, { numeric: true })
);
let opt: string = "";
let version: string = "";

const setFilter = (s: string): void => {
  status = s;
  renderMods();
};

const renderMods = (): void => {
  const modsElement = document.getElementById(
    "mods-container"
  ) as HTMLDivElement;
  if (modsElement) {
    modsElement.innerHTML = displayMods(status, query, version);
  }
};

const setSearch = (q: string): void => {
  query = q;
  renderMods();
};

const setVersion = (v: string): void => {
  version = v;
  renderMods();
};

const modsPage = (): string => {
  document.title = "Client Side Mods";
  return `
  <main>
    <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-5 mb-3">
      <h1 class="text text-shadow font-bold text-3xl text-center">Client Side Mods</h1>
      <div>
        <p class="text text-shadow text-center">All mods need to be approved by the <a class="text staff hover:underline font-bold" href="./staff">Titancraft Staff</a>. Using a mod not approved will be subject to consequences.</p>
        <p class="text text-shadow text-center">If a mod is not listed, or no longer <span class="text-(--outdated-color)">outdated</span> that you would like to use, please contact us with a link to the mod in <a href="https://discord.com/channels/184801826103754752/188513898616324097" target="_blank" referrerpolicy="no-referrer" rel="noopener" class="underline">#ask-a-mod</a>.</p>
      </div>
      <div class="flex gap-2 justify-center flex-wrap">
        <p class="w-full text text-shadow text-center underline">Filter mods by status:</p>
        <button id="all-btn" class="text text-shadow py-1 px-2 bg-[#fff] rounded-md hover:bg-[#ddd] hover:cursor-pointer selected-status">All Mods</button>
        <button id="approved-btn" class="text-white text text-shadow py-1 px-2 bg-(--approved-color) rounded-md hover:bg-[#0a0] hover:cursor-pointer">Approved Mods</button>
        <button id="partial-btn" class="text-white text text-shadow py-1 px-2 bg-(--partial-color) rounded-md hover:bg-[#D9A61F] hover:cursor-pointer">Partially Accepted Mods</button>
        <button id="rejected-btn" class="text-white text text-shadow py-1 px-2 bg-(--rejected-color) rounded-md hover:bg-[#a00] hover:cursor-pointer">Rejected Mods</button>
        <button id="outdated-btn" class="text-white text text-shadow py-1 px-2 bg-(--outdated-color) rounded-md hover:bg-[#101828] hover:cursor-pointer">Outdated Mods</button>
      </div>
      <div class="flex flex-col md:flex-row justify-center gap-1 md:gap-7 items-center">
        <div>
          <input type='search' name='q' id='search-input' placeholder='Search for a mod...' class='bg-white rounded-sm p-1 focus-visible:outline-none'/>
          <button id='search' class='bg-stone-900 hover:bg-stone-950 rounded-sm px-3 py-1 text-white'>Search</button>
        </div>
        <label for='version-select' class="text text-shadow">Select version:</label>
        <select name='versions' id='version-select' class="bg-white rounded-sm px-2 py-1">
          <option value=''>-</option>
          ${versions.forEach((version) => {
            // remove versionless mods from the list
            if (version)
              opt += `<option value='${version}'>${version}</option>`;
          })}
          ${opt}
        </select>
      </div>
      <div id="mods-container">
        ${displayMods(status, query, version)}
      </div>
    </section>
  </main>
`;
};

const attachEventListeners = (): void => {
  const allButton = document.getElementById("all-btn") as HTMLButtonElement;
  const approveButton = document.getElementById(
    "approved-btn"
  ) as HTMLButtonElement;
  const partialButton = document.getElementById(
    "partial-btn"
  ) as HTMLButtonElement;
  const rejectButton = document.getElementById(
    "rejected-btn"
  ) as HTMLButtonElement;
  const outdatedButton = document.getElementById(
    "outdated-btn"
  ) as HTMLButtonElement;
  const qSearchButton = document.getElementById("search") as HTMLButtonElement;
  const qSearchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  const qVersion = document.getElementById(
    "version-select"
  ) as HTMLSelectElement;
  const statusButtons = [
    allButton,
    approveButton,
    partialButton,
    rejectButton,
    outdatedButton,
  ];
  if (statusButtons && qSearchButton && qVersion) {
    allButton.addEventListener("click", () => {
      setFilter("");
      statusButtons.forEach((btn) => btn.classList.remove("selected-status"));
      allButton.classList.add("selected-status");
    });
    approveButton.addEventListener("click", () => {
      setFilter("approved");
      statusButtons.forEach((btn) => btn.classList.remove("selected-status"));
      approveButton.classList.add("selected-status");
    });
    partialButton.addEventListener("click", () => {
      setFilter("partially approved");
      statusButtons.forEach((btn) => btn.classList.remove("selected-status"));
      partialButton.classList.add("selected-status");
    });
    rejectButton.addEventListener("click", () => {
      setFilter("rejected");
      statusButtons.forEach((btn) => btn.classList.remove("selected-status"));
      rejectButton.classList.add("selected-status");
    });
    outdatedButton.addEventListener("click", () => {
      setFilter("outdated");
      statusButtons.forEach((btn) => btn.classList.remove("selected-status"));
      outdatedButton.classList.add("selected-status");
    });
    qSearchButton.addEventListener("click", () =>
      setSearch(qSearchInput.value)
    );
    qVersion.addEventListener("change", () => setVersion(qVersion.value));
  }
};

export { modsPage, attachEventListeners };
