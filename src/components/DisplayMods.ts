import IMods from "../interfaces/IMods";
import filterMods from "../scripts/filterMods";

const displayMods = (
  status: string,
  q: string = "",
  v: string = ""
): string => {
  // filter and search mods by status, query and version
  let filteredMods: IMods = status
    ? filterMods()
        .filter((mod) => mod.status.toLowerCase() == status.toLowerCase())
        .filter((mod) =>
          mod.name.toLowerCase().includes(q.toLowerCase().trim())
        )
        .filter((mod) => mod.version.includes(v))
    : filterMods()
        .filter((mod) =>
          mod.name.toLowerCase().includes(q.toLowerCase().trim())
        )
        .filter((mod) => mod.version.includes(v));

  let str: string = `<div class="grid md:grid-cols-2 gap-10 md:gap-5">`;
  // check if any mods found
  if (filteredMods && filteredMods.length > 0) {
    filteredMods.forEach((mod) => {
      str += `
      <div class="flex gap-1 flex-col md:flex-row">
        <div class="w-full md:w-1/5 flex justify-center">
          <${
            mod.link
              ? `a target="_blank" referrerpolicy="no-referrer" rel="noopener" href="${mod.link}" class="flex justify-center items-start"`
              : "div class='flex justify-center items-start'"
          } >
            <img class="max-w-[96px] object-contain h-auto block rounded-md border-4 border-solid border-(--accent-color)" src="${
              mod.icon
            }" alt="${mod.name} icon" />
          </${mod.link ? "a" : "div"}>
        </div>
        <div class="w-full md:w-4/5 flex flex-col gap-2">
          <div class="flex gap-2 flex-col md:flex-row flex-wrap">
            <${
              mod.link
                ? `a target="_blank" referrerpolicy="no-referrer" rel="noopener" href="${mod.link}"`
                : "p"
            } class="text font-bold text-lg block text-center md:text-start ${
        mod.link ? "hover:underline" : ""
      }">
              ${mod.name}
            </${mod.link ? "a" : "p"}>
            <div class="flex gap-1 justify-center md:justify-start">
              <p class="${mod.status
                .trim()
                .toLowerCase()
                .split(" ")
                .join(
                  ""
                )} px-2 py-0.5 self-center rounded-sm text-sm text-white font-light text-shadow">
                ${mod.status}
              </p>
              ${
                mod.link
                  ? `<p class="bg-[#111] px-2 py-0.5 self-center rounded-sm text-sm text-white font-light">
                ${mod.version}
              </p>`
                  : ""
              }
            </div>
          </div>
          ${
            mod.desc
              ? `<p class="grow-1 text block text-center md:text-start">
            ${mod.desc}
          </p>`
              : ""
          }
          ${
            mod.notice
              ? "<p class='font-bold text-shadow text-center md:text-start'>" +
                mod.notice +
                "</p>"
              : ""
          }
        </div>
      </div>
    `;
    });
  } else {
    str += `<p class='text-center font-bold col-span-full text-2xl'>Whoops... No mods here!</p>`;
  }
  str += "</div>";
  return str;
};

export default displayMods;
