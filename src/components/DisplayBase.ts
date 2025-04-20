import bases from "../assets/documents/bases.ts";

const bgn = document.getElementById("background") as HTMLDivElement;
const titanAttribution = document.getElementById(
  "titan-attribution"
) as HTMLParagraphElement;

const randomTitan = Math.floor(Math.random() * bases.length);

const getRef = (ref: number): string => {
  switch (ref) {
    case 1:
      return "";

    default:
      return "https://raw.githubusercontent.com/grimbirb/titancraft-images/main";
  }
};

const displayBase = (): void => {
  bgn.style.backgroundImage = `url(${getRef(bases[randomTitan].ref)}/${
    bases[randomTitan].background
  }.png)`;
  titanAttribution.innerHTML = `${bases[randomTitan].alt}</br><strong>View Full Background</strong>`;
  console.log(
    `Loading bgn: ${bases[randomTitan].ref}-${bases[randomTitan].background}`
  );

  titanAttribution.addEventListener("click", () => {
    open(
      `${getRef(bases[randomTitan].ref)}/${bases[randomTitan].background}.png`
    );
  });
};
export default displayBase;
