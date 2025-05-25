import { width, widthClasses } from "../../enums/TWidth";

const Paragraph = (
  string: string,
  width: width = "full",
  font: "normal" | "bold" | "light" | "medium" | "semibold" = "normal",
  align: "left" | "center" | "right" | "justify" = "left"
): string => {
  let weight: string;
  let dir: string;

  switch (font) {
    case "bold":
      weight = "font-bold";
      break;

    case "light":
      weight = "font-light";
      break;

    case "medium":
      weight = "font-medium";
      break;

    case "semibold":
      weight = "font-semibold";
      break;

    default:
      weight = "";
      break;
  }

  switch (align) {
    case "justify":
      dir = "text-justify";
      break;

    case "center":
      dir = "text-center";
      break;

    case "right":
      dir = "text-right";
      break;

    default:
      dir = "text-left";
      break;
  }

  return `<div class="flex ${widthClasses[width]}"><p class="w-full text text-wrap ${weight} ${dir}">${string}</p></div>`;
};

export default Paragraph;
