import { width, widthClasses } from "../../enums/TWidth";

const Heading = (
  string: string,
  type: 2 | 3 | 4 = 2,
  font: "normal" | "bold" | "light" | "medium" | "semibold" = "bold",
  align: "left" | "center" | "right" | "justify" = "center",
  decoration: "underline" | "none" = "none",
  width: width = "full"
): string => {
  let weight: string;
  let dir: string;
  let size: string;

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

  switch (type) {
    case 2:
      size = "text-2xl";
      break;

    case 3:
      size = "text-xl";
      break;

    default:
      size = "text-lg";
      break;
  }

  return `
  <div class="flex ${widthClasses[width]}">
    <h${type} class="w-full text-wrap text ${weight} ${dir} ${
    decoration === "none" ? "&nbsp;" : "underline"
  } ${size}">${string}</h${type}>
  </div>
   `;
};

export default Heading;
