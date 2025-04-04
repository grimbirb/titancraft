import mods from "../assets/documents/mods";
import IMods from "../interfaces/IMods";

const filterMods = (): IMods => {
  const acceptedMods = mods
    .filter((mod) => mod.status == "Approved")
    .sort((a, b) => a.name.localeCompare(b.name));
  const partialMods = mods
    .filter((mod) => mod.status == "Partially Approved")
    .sort((a, b) => a.name.localeCompare(b.name));
  const rejectedMods = mods
    .filter((mod) => mod.status == "Rejected")
    .sort((a, b) => a.name.localeCompare(b.name));
  const outdatedMods = mods
    .filter((mod) => mod.status == "Outdated")
    .sort((a, b) => a.name.localeCompare(b.name));

  return [...acceptedMods, ...partialMods, ...rejectedMods, ...outdatedMods];
};

export default filterMods;
