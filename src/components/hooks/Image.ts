import { width, widthClasses } from "../../enums/TWidth";

const Image = (
  directory: string,
  altText: string,
  width: width = "6/12",
  alignment: "left" | "center" | "right" = "center"
): string => {
  let dir: string;
  switch (alignment) {
    case "left":
      dir = "justify-start";
      break;

    case "right":
      dir = "justify-end";
      break;

    default:
      dir = "justify-center";
      break;
  }

  return `
  <div class="flex w-full ${dir}">
    <img src="${directory}" alt="${altText}" class="block text ${widthClasses[width]}" />
  </div>
  `;
};

export default Image;
