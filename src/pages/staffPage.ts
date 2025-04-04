import displayStaff from "../components/DisplayStaff";

const staffPage = (): string => {
  document.title = "Meet The Staff";
  return `
  <main>
    <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3">
      <h1 class="text text-shadow font-bold text-3xl text-center">The Staff Team</h1>
      ${displayStaff()}
    </section>
  </main>
`;
};

export default staffPage;
