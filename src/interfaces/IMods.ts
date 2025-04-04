import status from "../enums/EStatus";

interface IMod {
  status: status;
  name: string;
  desc: string;
  version: string;
  link: string;
  icon: string;
  notice: string; // rejected/partial notice
}

type IMods = IMod[];

export default IMods;
