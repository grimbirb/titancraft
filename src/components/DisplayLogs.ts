import { changeLogs } from "../assets/documents/logs";

const displayLogs = (): string => {
  let str: string = `<div class='flex flex-col gap-4'>`;

  changeLogs.forEach((log) => {
    str += `<div>
    <h2 class='text font-bold text-2xl'>${log.date}, Version ${log.version}</h2>`;

    str += `<ul class='text'>`;

    log.features.forEach((f) => (str += `<li>- ${f}</li>`));

    str += `</ul></div>`;
  });
  str += `</div>`;
  return str;
};

export default displayLogs;
