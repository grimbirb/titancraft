const Error404 = (): string => {
  document.title = "Page Not Found";
  return `
  <main>
    <section class="flex bg-(--background-color) px-3 rounded-lg flex-col gap-2">
      <img src="src/assets/images/404.png" alt="Error 404 - Page Not Found"/>
      <p class='text text-shadow text-center'>Think this is incorrect? Submit an <a class='link' target="_blank" referrerpolicy="no-referrer" rel="noopener" href="https://github.com/grimbirb/titancraft/issues/new?template=bug_report.md">issue</a></p>
    </section>
  </main>
  `;
};

export default Error404;
