import { width, widthClasses } from "../../enums/TWidth";

const Container = (
  direction: "row" | "column" | "row-reverse" | "column-reverse",
  width: width,
  spacing: number,
  ...content: string[]
): string => {
  let dir: string;
  switch (direction) {
    case "row":
      dir = "lg:flex-row";
      break;

    case "column":
      dir = "lg:flex-col";
      break;

    case "row-reverse":
      dir = "lg:flex-row-reverse";
      break;

    default:
      dir = "lg:flex-col-reverse";
      break;
  }
  return `
  <div class="flex flex-col ${dir} w-full ${
    widthClasses[width]
  } gap-${spacing}">${content.join("")}</div>
  `;
};

export default Container;
