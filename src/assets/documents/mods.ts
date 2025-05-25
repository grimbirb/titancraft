import status from "../../enums/EStatus";
import IMods from "../../interfaces/IMods";

const mods: IMods = [
  {
    status: status.approved, // can be either approved / partial / rejected / outdated  || has to include status.
    name: "Ambiance!",
    desc: "A small Mod that add new ambient effects to the Minecraft!",
    version: "1.21.1",
    link: "https://modrinth.com/mod/ambiance",
    icon: "https://cdn.modrinth.com/data/hCdWhw9o/9df0d2d8ae3748a3f085f33e9cbf9bae809b8184_96.webp",
    notice: "", // for when rejected or partial
  },
  {
    status: status.approved,
    name: "Bad Wither No Cookie - Reloaded",
    desc: "Localizes the wither and dragon death sounds.",
    version: "1.21.4",
    link: "https://modrinth.com/mod/bad-wither-no-cookie",
    icon: "https://cdn.modrinth.com/data/lL2MtE37/a6e0b3969dec2c2fc98081d5f95ae8edac8ada95_96.webp",
    notice: "",
  },
  {
    status: status.partial,
    name: "YouArch",
    desc: "Litematica with certain features removed or modified.",
    version: "1.21.4",
    link: "https://modrinth.com/mod/youarch",
    icon: "https://cdn.modrinth.com/data/OjAE3DN6/602cf9c552d919a1f4ab7ef931a06d3144f00f72_96.webp",
    notice:
      "Must give proper credit when using schematics found online.<br/><span style='color: maroon;'>Only this Litematica mod is Approved. Printer and the like will get you banned.</span>",
  },
  {
    status: status.rejected,
    name: "Any X-Ray Mod",
    desc: "",
    version: "",
    link: "",
    icon: "https://images.sftcdn.net/images/t_app-icon-m/p/cdfacd64-acfd-4184-a4c3-b001992ee214/289264322/x-ray-texture-pack-for-minecraft-logo",
    notice:
      "<span style='color: maroon;'>This is cheating and bannable.</span>",
  },
  {
    status: status.outdated,
    name: "Auditory",
    desc: "A mod that expands and improves upon the sound and audio aspects of Minecraft!",
    version: "1.19.3",
    link: "https://modrinth.com/mod/auditory",
    icon: "https://cdn.modrinth.com/data/1LjfkWOR/eee1dd30082422610387f3d5a5bb3369c360efeb_96.webp",
    notice: "",
  },
  {
    status: status.approved,
    name: "Search Stats",
    desc: "Adds a search bar to the statistics screen.",
    version: "1.21.1",
    link: "https://modrinth.com/mod/searchstats",
    icon: "https://cdn.modrinth.com/data/ExI7GmJi/eabce9740a38e04e147156e56fa0fdb454d16a26_96.webp",
    notice: "",
  },
];

export default mods;
