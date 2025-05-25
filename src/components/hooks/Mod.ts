const Mod = (text: string = "Moderator"): string => {
  return `<a class="text mod hover:underline font-bold" href="./staff">${text}</a>`;
};

export default Mod;
