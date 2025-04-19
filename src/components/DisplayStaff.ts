import staff from "../assets/documents/staff";

const displayStaff = (): string => {
  let str: string = `<div class="flex flex-col gap-10">`;
  let rtl: boolean = false;

  staff.forEach((staff) => {
    str += `<div class="flex flex-col items-center md:flex-row gap-10 px-3 md:px-15 ${
      rtl ? "md:flex-row-reverse" : ""
    }">
      <div class="w-3/5 md:w-1/8">
        <img class="block" src="/images/staff/${staff.name.toLocaleLowerCase()}.png" alt="${
      staff.name
    }"/>
      </div>
      <div class="w-full md:w-7/8 flex flex-col">
        <p class="text font-bold ${staff.role.toLocaleLowerCase()} text-shadow text-center ${
      rtl ? "md:text-right" : "md:text-left"
    }">${staff.name}</p>
        <p class="font-sm font-bold underline text-shadow ${staff.role.toLocaleLowerCase()} text-center ${
      rtl ? "md:text-right" : "md:text-left"
    }">${staff.role}</p>
        <p class="text">${staff.desc}</p>
      </div>
    </div>`;
    rtl = !rtl;
  });
  str += "</div>";
  return str;
};

export default displayStaff;
