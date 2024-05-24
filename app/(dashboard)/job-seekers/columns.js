"use client";
import DetailsModal from "@/components/DetailsModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { CiCircleChevDown } from "react-icons/ci";

export const columns = [
  {
    accessorKey: "PID",
    header: "PID",
    cell: (row) => {
      return <span style={{ color: "#808080" }}>#{row?.row?.id}</span>;
    },
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Ph_no_Watsapp",
    header: "Ph. no/Watsapp",
  },
  {
    accessorKey: "Nationality",
    header: "Nationality",
  },
  {
    accessorKey: "Place_of_Residence",
    header: "Place of Residence",
  },
  {
    accessorKey: "NOTTP",
    header: "NOTTP",
  },
  {
    accessorKey: "Actions",
    cell: ({ row }) => {
      // console.log(row.original);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <CiCircleChevDown className="text-3xl" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="px-4">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <hr
              className="pt-2 border-t-1 block w-full"
              style={{ borderColor: "#CCCCCD" }}
            />
            <DetailsModal />
            <hr
              className="pt-2 border-t-1 block w-full"
              style={{ borderColor: "#CCCCCD" }}
            />
            <Button
              className="bg-[#D3175233] w-full rounded-md mb-2"
              style={{ color: "#D31752" }}
            >
              Delete User
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
