import displayLogs from "../components/DisplayLogs";

const logsPage = (): string => {
  document.title = "Change Logs";
  return `
    <main>
        <section class="flex bg-(--background-color) p-3 rounded-lg flex-col gap-2 mb-3 md:px-30">
            <h1 class="text font-bold text-3xl text-center">Change Logs</h1>
            ${displayLogs()}
        </section>
    </main>
`;
};

export default logsPage;
