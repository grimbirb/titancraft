import Link from "../../components/hooks/Link";
import event from "../../enums/EEvent";
import Banner from "../../enums/TBanners";

// controls banner colour, by an event's colour.
const bannerType: event | Banner = event.summer;

// if you dont need a banner to be active, please remove the Link import if exists (line 1, usually) and set the banner value as: ``;
// banner template: `${Link(`YOUR TEXT HERE`, "./event", false, false)}`;   (OR just text inside ``; if you dont need it to be a link)
const banner: string = `${Link(
  "Embrace the fire of the solstice - Where day lingers and light rules. The Summer Solstice is here! 🌞",
  "./event",
  false,
  false
)}`;

export { banner, bannerType };
