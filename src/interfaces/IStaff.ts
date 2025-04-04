import role from "../enums/ERole";

interface staff {
  role: role;
  name: string;
  desc: string;
}

type IStaff = staff[];

export default IStaff;
