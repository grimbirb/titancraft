const aboutPage = () => {
  document.title = "About Titancraft";
  return `
    <main>
      <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3">
        <h1 class="text text-shadow font-bold text-3xl text-center">About Titancraft</h1>
        <section class="flex flex-col gap-2">
          <h2 class="text text-shadow font-bold text-2xl">What is Titancraft?</h2>
          <p class="text text-shadow">
            Titancraft is TangoTek's vanilla(ish) Patreon pay-to-play server, and available to anyone who is an active Patreon of $10 tier or higher.<br/>
            Since opening its doors to the community on June 5th, 2016 the server has been going strong over eight years and is currently in its <strong>tenth season</strong>!
          </p>
          <p class="text text-shadow">
            Titancraft is welcoming all players of all levels and skills. Whether you're into building, making redstone contraptions, making map arts, exploring, mining, designing minigames, destroying mountains of terracottas or even wreak havoc and shenanigans maker. There's a place for anyone on Titancraft, with people who spend an entire season making mega projects completely from scratch! Everyone is welcome to a community full of love.
          </p>
        </section>
        <section class="flex flex-col gap-5">
          <h2 class="text text-shadow font-bold text-2xl">What makes Titancraft unique?</h2>
          <section class="flex flex-col gap-2">
            <h3 class="text text-shadow font-bold text-xl">The Above</h3>
            <p class="text text-shadow">
              <em>"The Above"</em> is Titancraft's unique custom dimension, filled with puzzles, races, games, quests, hidden loot and numerous bosses you can fight! It is a challenge for anyone who wants to experience a unique twist on an even harder difficulty. The Above is what inspired Tango to start the Titancraft server and has been upgraded through the years by a team of experienced datapack makers and builders for the community.
            </p>
            <p class="text text-shadow">
              Conquering The Above can even yield you all kinds of special loot. Some loot will be boring Minecraft vanilla items and blocks, such as beacons, netherite, or an Unbreaking IV elytra. While some loot will be more unique with <strong>custom enchantments</strong> such as the Rush leggings, the Philia pickaxes and axes, or the forever-chased-after <span class="rainbow font-bold">Boom Stick</span>. All the items exist as fun rewards for your superterrestrial journeys, but they're completely optional; there are a lot of acivities to enjoy at The Above, even those who don't like to fight!
            </p>
          </section>
          <section class="flex flex-col gap-2">
            <h3 class="text text-shadow font-bold text-xl">The Community</h3>
            <p class="text text-shadow">
              The core of Titancraft and what makes Titancraft so great is the community, the community is heartwarming with the trait of spreading kindness, support and love throughout everyone, creating a comfortable place for anyone no matter what, meeting people who would be friends for life.
            </p>
            <p class="text text-shadow">
              Additionally, the community has spent the past years building amazing projects, which you may check out through Tango's server tour at the end of each season:
            </p>
            <div class="flex w-full items-center md:justify-evenly font-bold flex-col md:flex-row">
              <a class="link" href="https://youtu.be/Z0AKD_dXDgU?si=fEhPKTxQBARUhIj4&t=271" target="_blank" referrerpolicy="no-referrer" rel="noopener">Season 6</a>
              <a class="link" href="https://youtu.be/I7VwVeurZww?si=tW-dO16kRysqv34N&t=239" target="_blank" referrerpolicy="no-referrer" rel="noopener">Season 7</a>
              <a class="link" href="https://youtu.be/p3nzhtcKDMY?si=Jzi43Ontw2bcQuXP" target="_blank" referrerpolicy="no-referrer" rel="noopener">Season 8 (Part 1)</a>
              <a class="link" href="https://youtu.be/l8bKkTXVGSY?si=NKhx32Tn5UnTenyt" target="_blank" referrerpolicy="no-referrer" rel="noopener">Season 8 (Part 2)</a>
              <a class="link" href="https://www.youtube.com/watch?v=YEKW3v-9NJE&list=PL_ZPVrv19ppW9FY2rHcRsWo9CWMZVpQSK" target="_blank" referrerpolicy="no-referrer" rel="noopener">Season 9</a>
            </div>
          </section>
          <div class="flex justify-center gap-5">
            <div class="flex flex-col w-full md:w-1/2 items-center">
              <img class="block" src="/images/s10_hub.png" alt="Season 10 Nether Hub" />
              <p class="text text-shadow text-center">Season 10 Nether Hub designed by xWildSlicerx</p>
            </div>
          </div>
          <section class="flex flex-col gap-2">
            <h3 class="text text-shadow font-bold text-xl">The Staff</h3>
            <p class="text text-shadow">
              The Titancraft server's <a class="staff font-bold" href="./staff">staff</a> are experienced community members who help make the server run smoothly and keep the community a safe space for everyone, allowing the community to blossom and spread love throughout the entire community, if you'd like to get to know the staff a bit better, check out the <a class="staff font-bold underline" href="./staff">Meet the Staff</a> page! We promise, we don't bite, our DMs are always open for you no matter what.
            </p>
          </section>
          <section class="flex flex-col gap-2">
            <h3 class="text text-shadow font-bold text-xl">Server Events</h3>
            <p class="text text-shadow">
              Titancraft celebrates numerous holidays, seasonal events and organized districts such as Halloween, Christmas, Valentines Day, St. Patrick's Day and Easter. These holidays allow the community to take a break from normal activies, hangout with other players, spread the holiday cheer and let creativity flow and share the love with each other. <br/>
              Some holidays receive their own district where you may build in theme to your heart's content, and special activities such as pumpkin carving, christmas tree decoration and egg decorations!
            </p>
            <p class="text text-shadow">Sometimes, Tango himself hops in the server to celebrate the holidays with the community, touring the districts and spreading gifts!</p>
          </section>
        </section>
        <br/>
        <p class="text text-shadow text-center font-bold">We hope we were about to explain a little about Titancraft :)</p>
      </section>
    </main>
  `;
};

export default aboutPage;
