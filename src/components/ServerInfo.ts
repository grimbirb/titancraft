import serverDetails from "../assets/documents/serverDetails";

const getServer = (info: string): unknown => {
  switch (info) {
    case "ver":
      return serverDetails.version;

    case "season":
      return serverDetails.season;

    default:
      return serverDetails.date;
  }
};

export default getServer;
