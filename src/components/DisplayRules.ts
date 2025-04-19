import discordRules from "../assets/documents/discordRules";
import faq from "../assets/documents/faq";
import tcRules from "../assets/documents/serverRules";

const displayRules = (info: string): string => {
  let str: string = "";

  switch (info) {
    case "discord":
      str = "";
      str += `<div class='w-full flex justify-center'>
          <img class='block w-full md:w-1/2' src='/images/discord-rules.png' alt='Discord Server Rules'/>
        </div>`;
      str += `<div class='px- md:px-30 flex flex-col gap-4'>`;
      discordRules.forEach((rule) => {
        rule.header
          ? (str += `<h1 class='text font-bold text-3xl text-center'>${rule.header}</h1>`)
          : "";

        str += `<div>
        <h2 class='text font-bold text-2xl'>${rule.subheader}</h2>
        <p class='text'>${rule.paragraph}</p>
        </div>
        `;
      });
      str += "</div>";
      return str;

    case "tc":
      str = "";
      str += `<div class='w-full flex justify-center'>
          <img class='block w-full md:w-1/2' src='/images/tc-rules.png' alt='Discord Server Rules'/>
        </div>`;
      str += `<div class='px-3 md:px-30 flex flex-col gap-4'>`;
      tcRules.forEach((rule) => {
        rule.header
          ? (str += `<h1 class='text font-bold text-3xl text-center'>${rule.header}</h1>`)
          : "";

        str += `<div>
        <h2 class='text font-bold text-2xl'>${rule.subheader}</h2>
        <p class='text'>${rule.paragraph}</p>
        </div>
        `;
      });
      str += "</div>";
      return str;

    case "faq":
      str = "";
      str += `<div class='w-full flex justify-center'>
          <img class='block w-full md:w-1/2' src='/images/faq.png' alt='Discord Server Rules'/>
        </div>`;
      str += `<div class='px-3 md:px-30 flex flex-col gap-4'>`;
      faq.forEach((rule) => {
        rule.header
          ? (str += `<h1 class='text font-bold text-3xl text-center'>${rule.header}</h1>`)
          : "";

        str += `<div>
        <h2 class='text font-bold text-2xl'>${rule.subheader}</h2>
        <p class='text'>${rule.paragraph}</p>
        </div>
        `;
      });
      str += "</div>";
      return str;

    default:
      return 'Issue retreiving info, please submit an <a class="link" target="_blank" referrerpolicy="no-referrer" rel="noopener" href="https://github.com/grimbirb/titancraft/issues/new?template=bug_report.md">issue</a>';
  }
};

export default displayRules;
