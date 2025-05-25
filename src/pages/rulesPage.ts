import displayRules from "../components/DisplayRules";
import Mod from "../components/hooks/Mod";
import MrsTango from "../components/hooks/MrsTango";
import Staff from "../components/hooks/Staff";
import Tango from "../components/hooks/Tango";
import getServer from "../components/ServerInfo";

let info: string = "discord";

const renderPage = (): void => {
  const infoContainer = document.getElementById(
    "info-container"
  ) as HTMLDivElement;
  if (infoContainer) infoContainer.innerHTML = displayRules(info);
};

const rulesPage = () => {
  document.title = "Rules & FAQ";
  return `
    <main>
      <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-3 mb-3">
        <section class='text text-lg font-medium text-center px-3 md:px-30 flex flex-col gap-3'>
          <h2 class='text-3xl font-bold'>Rules & FAQ Notes:</h2>
          <p>
            Upon entering the <span class='text-indigo-700'>Discord server</span>, you will be very limited on what channels you can see or use. <br/>
            When you first chat on the server you will be assigned a role appropriate to your status, granting you access to other server channels.
          </p>
          <p>
            If a ${Mod("mod")} doesn't respond in #ask-a-mod, use ${Staff(
    "@Staff"
  )} to get our attention. <br/>
            Please note, any message posted in the #ask-a-mod channel will ping the staff team
          </p>
          <p>
            ${Mod()} have their names coloured in-game and Discord accordingly, the same applies to ${Staff()}, ${Tango()}, and ${MrsTango()}, and other Patreon tiers.
          </p>
          <p>
            These rules are meant to keep the community fair, safe and avoid conflicts. Most of them are common sense yet expected to be known. Ingnorance of a rule is not a valid excuse of not following it. <br/>
            Most rule violations will get a warning from a <span class='mod'>moderator</span>, though, some are grounds for an immediate ban. <br/>
            <span class='font-bold text-xl'>All determinations are final at Mods' discretions, and no further argumenst will be considered.</span>
          </p>
          <p>
            Dear Patreons, the server is currently on version <span class='underline'>${getServer(
              "ver"
            )}</span> for Season <span class='underline'>${getServer(
    "season"
  )}</span>, started on <span class='underline'>${getServer("date")}</span>.
          </p>
        </section>
        <h2 class='text text-2xl font-bold text-center'>What would you like to know:</h2>
        <div class="flex gap-2 justify-center flex-wrap">
          <button id="discord-btn" class="text-white text text-shadow py-1 px-2 bg-indigo-400 rounded-md hover:bg-indigo-500 hover:cursor-pointer selected-status">Discord Rules</button>
          <button id="tc-btn" class="text-white text text-shadow py-1 px-2 bg-red-600 rounded-md hover:bg-red-700 hover:cursor-pointer">Titancraft Rules</button>
          <button id="faq-btn" class="text-white text text-shadow py-1 px-2 bg-amber-400 rounded-md hover:bg-amber-500 hover:cursor-pointer">FAQ</button>
        </div>
        <div id="info-container">
          ${displayRules(info)}
        </div>
        <aside class="w-full mt-10">
          <p class="text text-center">Want to have your base/projects added as a background? Contact <span class="dev font-bold">GrimBirb</span> on Discord, or submit one <a class='link' target="_blank" referrerpolicy="no-referrer" rel="noopener" href="https://github.com/grimbirb/titancraft/issues/new?template=background-request.md">here</a></p>
        </aside>
      </section>
    </main>
  `;
};

const attachEventListeners = (): void => {
  const discordBtn = document.getElementById(
    "discord-btn"
  ) as HTMLButtonElement;
  const tcBtn = document.getElementById("tc-btn") as HTMLButtonElement;
  const faqBtn = document.getElementById("faq-btn") as HTMLButtonElement;
  const btns = [discordBtn, tcBtn, faqBtn];

  if (btns) {
    discordBtn.addEventListener("click", () => {
      console.log("click!");
      info = "discord";
      btns.forEach((btn) => btn.classList.remove("selected-status"));
      discordBtn.classList.add("selected-status");
      renderPage();
    });
    tcBtn.addEventListener("click", () => {
      info = "tc";
      btns.forEach((btn) => btn.classList.remove("selected-status"));
      tcBtn.classList.add("selected-status");
      renderPage();
    });
    faqBtn.addEventListener("click", () => {
      info = "faq";
      btns.forEach((btn) => btn.classList.remove("selected-status"));
      faqBtn.classList.add("selected-status");
      renderPage();
    });
  }
};

export { rulesPage, attachEventListeners };
