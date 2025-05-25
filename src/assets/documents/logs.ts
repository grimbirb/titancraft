/*
Change logs, will also detect the highest version and display it as current website version
*/

import ILogs from "../../interfaces/ILogs";

const changeLogs: ILogs = [
  {
    version: 0.1,
    date: "2024/08/17",
    features: [`Built home page structure`],
  },
  {
    version: 0.5,
    date: "2025/03/15",
    features: [
      `Revamped entire website structure`,
      `Created bgsys system`,
      `Installed <a href='https://tailwindcss.com/'>Tailwind</a> framework`,
      `Home page revamped`,
      `Built routing framework`,
    ],
  },
  {
    version: 0.51,
    date: "2025/03/17",
    features: [
      `Updated website styles`,
      `Added issueing templates`,
      `Added Staff page`,
      `Fixed navigation bar`,
      `Fixed Caable's shameless-plug link`,
    ],
  },
  {
    version: 0.6,
    date: "2025/03/18",
    features: [`Added Client Mods page`],
  },
  {
    version: 0.66,
    date: "2025/03/19",
    features: [
      `Added site improvements`,
      `Added Client Mods filtering options`,
    ],
  },
  {
    version: 0.7,
    date: "2025/03/22",
    features: [`Added About page`],
  },
  {
    version: 0.73,
    date: "2025/03/28",
    features: [`Added Change logs`, `Added Rules & FAQ page`],
  },
  {
    version: 0.8,
    date: "2025/03/28",
    features: [`Optimized Client Mods filtering and sorting`],
  },
  {
    version: 1.0,
    date: "2025/04/01",
    features: [`Added responsiveness`, `Polished UI`, `Full Release`],
  },
  {
    version: 1.2,
    date: "2025/04/27",
    features: [`Added Events`, "Added Banners"],
  },
  {
    version: 1.5,
    date: "2025/05/25",
    features: [
      `Added Join Titancraft`,
      "Added Background Suggestions",
      "Added Mentionable roles (staff, mods, etc)",
      "Added a Custom Page framework",
      "Added extra banner customization",
    ],
  },
].sort((a, b) => b.version - a.version);

const latestVersion = (): string => changeLogs[0].version.toString();

export { changeLogs, latestVersion };
