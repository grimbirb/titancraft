const aboutSitePage = (): string => {
  document.title = "About This Website";
  return `
    <main>
        <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 md:px-30 mb-3">
            <h1 class="text text-shadow font-bold text-3xl text-center">About The Website</h1>
            <div class='flex flex-col-reverse items-center md:flex-row md:justify-between w-full'>
                <section class='w-full md:w-2/3 text text-shadow'>
                    <h2 class='font-bold text-2xl text-center md:text-start'>Hi, I'm <span class='dev'>GrimBirb</span>!</h2>
                    <p>I'm an aspiring Fullstack Developer.</p>
                    <p>This website has been a side-project for me while I was on my Fullstack Development course as a means to learn, and improve on my skills.</p>
                    <br/>
                    <p>I work in TAC Technical Service Engineering at a large corporate company, I love playing games ever since I was a small kid, I love going out for runs, meddle with computers, paint and design things!</p>
                    <br/>
                    <p>I've discovered Tango as my first Hermit when Season 4 of Hermitcraft launched, and since then I've been hooked! I've been an avid fan since then, and decided to join Titancraft and this incredible community at Season 9 of Titancraft, and launched together with Lomaxmom <em>(!lomax - for those of you who know)</em> the Freshers' Club!</p>
                    <br/>
                    <p>You may see me around the Titancraft Server roughly around 4pm to 9pm UTC time, and during the weekends.</p>
                    <br/>
                    <p>I am part of the Badlands Brotherhood in Season 10 of Titancraft and usually hang around in a group, don't be afraid to say hello to me, I love interacting with this community and being part of it.</p>
                    <br/>
                    <p>Needless to say my DMs are always open for a chat, and if you'd like to suggest anything for this website or any project in websites or minecraft, let me know!</p>
                    <p>Also, I stream on <a class='text-indigo-600 hover:underline' href='https://www.twitch.tv/grimbirb' target='_blank' referrerpolicy='no-referrer' rel='noopener'>Twitch</a> and have a Titancraft series on <a class='link' href='https://www.youtube.com/@grimbirb' target='_blank' referrerpolicy='no-referrer' rel='noopener'>YouTube</a>! :P (sorry Caable, stole your plug!)</p>
                </section>
                <div class='w-2/3 md:w-1/3'>
                    <img class='block' src='src/assets/images/grimbirb.png' alt="GrimBirb's Avatar" />
                </div>
            </div>
        </section>
    </main>
`;
};

export default aboutSitePage;
