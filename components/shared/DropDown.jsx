import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";

const MyDropdownMenu = () => {
  const [position, setPosition] = useState("monthly");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex  justify-center items-center px-2 py-1 bg-pinkTest text-pinkColor rounded font-bold text-sm outline-none border-none">
          {position}
          <span>
            <FaAngleDown className="ml-1" />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30 z-40 rounded text-pinkColor p-1 px-2 bg-red-100 mt-1 text-sm">
        <DropdownMenuLabel>Select Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          className="p-2"
        >
          <DropdownMenuRadioItem
            className="outline-none cursor-pointer"
            value="weekly"
          >
            Weekly
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="outline-none cursor-pointer"
            value="monthly"
          >
            Monthly
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="outline-none cursor-pointer"
            value="yearly"
          >
            Yearly
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropdownMenu;
