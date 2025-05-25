const Link = (
  text: string,
  url: string,
  newTab: boolean = false,
  linkColor: boolean = true
): string => {
  return `<a class="text text-shadow ${
    linkColor ? "link" : ""
  } inline hover:underline" href="${url}" ${
    newTab ? "referrerpolicy='no-referrer' rel='noopener' target='_blank'" : ""
  }>${text}</a>`;
};

export default Link;
