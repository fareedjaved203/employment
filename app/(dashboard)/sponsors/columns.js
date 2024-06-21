"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteSponsor } from "@/firebase/sponsor";
import toast from "react-hot-toast";
import { CiCircleChevDown } from "react-icons/ci";

const removeSponsor = async (id) => {
  await deleteSponsor(id);
  toast.success("Deleted Successfully");
};

export const columns = [
  {
    accessorKey: "PID",
    header: "PID",
    cell: (row) => {
      return (
        <span style={{ color: "#808080" }}>#{Number(row?.row?.id) + 1}</span>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Ph. no/Watsapp",
  },
  {
    accessorKey: "peopleHired",
    header: "People Hired",
    cell: (row) => {
      return (
        <span className="flex md:justify-center md:items-center md:w-1/2">
          {row?.row?.original?.peopleHired}
        </span>
      );
    },
  },
  {
    accessorKey: "commission",
    header: "Commision Paid",
    cell: (row) => {
      return (
        <span className="flex justify-center items-center md:w-1/2">
          {row?.row?.original?.commission} SAR
        </span>
      );
    },
  },
  {
    accessorKey: "Actions",
    cell: ({ row }) => {
      // console.log(row.id);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <CiCircleChevDown className="text-3xl" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="px-4 bg-white shadow-lg">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <hr
              className="pt-2 border-t-1 block w-full"
              style={{ borderColor: "#CCCCCD" }}
            />
            <Button
              className="bg-[#D3175233] w-full rounded-md mb-2"
              style={{ color: "#D31752" }}
              onClick={() => removeSponsor(row.original.id)}
            >
              Delete User
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
