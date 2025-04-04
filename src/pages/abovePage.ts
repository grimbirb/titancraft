const abovePage = (): string => {
  document.title = "The Above";
  return `
  <main>
    <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3">
      <img src="src/assets/images/under-construction.png" alt="Page under construction"/>
    </section>
  </main>
`;
};

export default abovePage;
