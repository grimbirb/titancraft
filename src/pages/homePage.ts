const homePage = (): string => `
<main>
    <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3">
        <h1 class="text font-bold text-3xl text-center">Welcome to the Titancraft
        Website</h1>
        <div class="flex flex-col md:flex-row gap-5">
            <div class="w-full md:w-1/2">
                <img src="images/s9-end-tour.jpg" alt="The Titancraft Community" class="block">
                <p class="text block text-center">
                The Titancraft Community, End of Season 9
                <a class="link"
                    href="https://www.youtube.com/watch?v=YEKW3v-9NJE&list=PL_ZPVrv19ppW9FY2rHcRsWo9CWMZVpQSK"
                    target="_blank" referrerpolicy="no-referrer" rel="noopener">
                    tour
                </a>
                </p>
            </div>
            <div class="w-full md:w-2/3 flex flex-col gap-8">
                <div class="flex flex-col gap-2">
                <p class="text text-lg text-center md:text-left">
                    Have you joined the TangoTek Supporter Discord server, or are you thinking about signing
                    up and are looking for information?
                </p>
                <p class="text text-lg text-center md:text-left">
                    Then you've come to the right place! Here you will find everything you need to know
                    about the server, rules, and community!
                </p>
                </div>
                <section class="flex flex-col gap-2">
                <h2 class="text font-medium text-xl text-center">About Tango</h2>
                <div class="flex flex-col gap-2">
                    <p class="text text-lg text-center md:text-left">
                    TangoTek is a YouTuber, Twitch streamer, and Hermitcraft member. He produces content for Let's
                    Plays, tutorials, his
                    "What If?" mod series, and the famous dungeon-crawling game Decked Out. <br> His content and streams
                    can be found at any of
                    these links:
                    </p>
                    <div class="flex flex-col md:gap-6">
                        <div class="flex items-center md:justify-between text text-lg px-5 flex-col md:flex-row">
                            <a class="flex items-center gap-2 link" href="https://www.youtube.com/@TangoTekLP" target="_blank"
                            referrerpolicy="no-referrer" rel="noopener">
                            <img class="rounded-full w-10 inline-block"
                                src="https://yt3.googleusercontent.com/ytc/AIdro_mR_tFz5GNerbf77t2SkUmKq0ornhCkKb9QtpsnFjnQKvc=s176-c-k-c0x00ffffff-no-rj-mo" />
                            Main Channel
                            </a>
                            <a class="flex items-center gap-2 link" href="https://www.youtube.com/@TangoTek2" target="_blank"
                            referrerpolicy="no-referrer" rel="noopener">
                            <img class="rounded-full w-10 inline-block"
                                src="https://yt3.googleusercontent.com/ytc/AIdro_lm-SvPHsWfM9HywyggV6VJGyFqRRgfsuL06R99tWYXng=s176-c-k-c0x00ffffff-no-rj-mo" />
                            VOD Channel
                            </a>
                            <a class="flex items-center gap-2 link" href="https://www.twitch.tv/tangotek" target="_blank"
                            referrerpolicy="no-referrer" rel="noopener">
                            <img class="w-10 inline-block"
                                src="https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png" />
                            Twitch
                            </a>
                        </div>
                        <div class="flex items-center md:justify-between text text-lg px-5 flex-col md:flex-row">
                            <a class="flex items-center gap-2 link" href="https://x.com/tangoteklp" target="_blank"
                            referrerpolicy="no-referrer" rel="noopener">
                            <img class="rounded-full w-10 inline-block"
                                src="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0pJREFUWAntVk1oE1EQnnlJbFK3KUq9VJPYWgQVD/5QD0qpfweL1YJQoZAULBRPggp6kB78PQn14kHx0jRB0UO9REVFb1YqVBEsbZW2SbVS0B6apEnbbMbZ6qbZdTempqCHPAjvzcw3P5mdmfcAiquYgX+cAVwu/+5AdDMQnSPCHUhQA0hf+Rxy2OjicIvzm+qnKhito0qpb2wvJhWeJgCPP7oPELeHvdJ1VSGf3eOPnSWga0S0Qo9HxEkEusDBuNjbEca8G291nlBxmgDc/ukuIvAJxI6wr+yKCsq1ewLxQ2lZfpQLo8oQ4ZXdCkfnACrGWpyDCl+oQmVn5xuVPU102e2P3qoJkFOhzVb9S7KSnL5jJs/mI+As01PJFPSlZeFSZZoAGBRXBZyq9lk5NrC+e7pJ5en30c+JWk59pZ5vRDOuhAD381c/H/FKz1SMNgCE16rg505r5TT0uLqme93d0fbq+1SeLSeU83Ke0RHYFPGVPcjQfNDUwIa7M665+dQAEEjZoMwZMcEF9RxIDAgBQ2mCcqJ0Z0b+h4MNbZ4RnyOSDbNmE2iRk5jCNgIIckFoZAs4IgfLGrlKGjkzS16iwj6pV9I4mUvCPf73JVytH9nRJj24QHrqU8NCIWrMaGqAC+Ut/3ZzAS63cx4v2K/x/IvQBOCwWzu5KmJGwEJ5PIgeG9nQBDDcXPpFoDjJ7ThvBC6EZxXWkJG+JgAFwGM4KBAOcibeGCn8FQ/hyajXPmSk+1sACogn4hYk7OdiHDFSWipPkPWSmY6mCzIghEEuxJvcEYUvxIdhX2mvmSHDDPBF9AJRnDZTyp+P40671JYLbxiAohDxSTfQIg4oNxgPzCWPHaWQBViOf2jGqVwBaEaxGbAqOFMrp+SefC8eNhoFIY5lXzpmtnMGUB2IbU3JdIqVW9m5zcxINn/hAYKiIexdaTh4srHKORMAP0b28PNgJyGt5gvHzQVYx91QpVcwpRFl/p63HSR1DLbid1OcTpAJQOG7u+KH+aI5Qwj13IsamU5vkUSIc8uGLDa8OtoivV8U5HcydFLtT7hlSDVy2nfxI2Ibg9awuVU8IeJAOMF5m2B6jFs1tM5R9rS3GRP5uSuiihn4DzPwA7z7GDH+43gqAAAAAElFTkSuQmCC" />
                            Twitter / X
                            </a>
                            <a class="flex items-center gap-2 link" href="https://www.patreon.com/tangotek" target="_blank"
                            referrerpolicy="no-referrer" rel="noopener">
                            <img class="rounded-full w-10 inline-block"
                                src="https://c5.patreon.com/external/favicon/rebrand/favicon.ico?v=af5597c2ef" />
                            Patreon
                            </a>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
        <aside class="w-full mt-10">
            <p class="text text-center">Want to have your base/projects added as a background? Contact <span class="dev font-bold">GrimBirb</span> on Discord, or submit one <a class='link' target="_blank" referrerpolicy="no-referrer" rel="noopener" href="https://github.com/grimbirb/titancraft/issues/new?template=background-request.md">here</a></p>
        </aside>
    </section>
</main>
`;

export default homePage;
