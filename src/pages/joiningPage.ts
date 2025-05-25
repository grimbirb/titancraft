import joiningTC from "../assets/documents/joiningTitancraft";

const joinPage = (): string => {
  document.title = `Joining Titancraft`;
  return `
  <main>
    <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3">
      <h1 class="text font-bold text-3xl text-center">Joining Titancraft</h1>
      ${joiningTC.join("")}
      <aside class="w-full mt-10">
        <p class="text text-center">Want to have your base/projects added as a background? Contact <span class="dev font-bold">GrimBirb</span> on Discord, or submit one <a class='link' target="_blank" referrerpolicy="no-referrer" rel="noopener" href="https://github.com/grimbirb/titancraft/issues/new?template=background-request.md">here</a></p>
        </aside>
    </section>
  </main>
`;
};

export default joinPage;
