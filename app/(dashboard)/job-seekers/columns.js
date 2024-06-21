"use client";
import { getId, setId } from "@/app/actions/cookies";
import DetailsModal from "@/components/DetailsModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteJobSeeker } from "@/firebase/jobSeeker";
import toast from "react-hot-toast";
import { CiCircleChevDown } from "react-icons/ci";

export const removeJob = async (id) => {
  await deleteJobSeeker(id);
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
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "placeOfResidence",
    header: "Place of Residence",
  },
  {
    accessorKey: "numberOfTimesTransferredPreviously",
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
          <DropdownMenuContent align="end" className="px-4 bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <hr
              className="pt-2 border-t-1 block w-full"
              style={{ borderColor: "#CCCCCD" }}
            />
            <DetailsModal data={row?.original} />
            <hr
              className="pt-2 border-t-1 block w-full"
              style={{ borderColor: "#CCCCCD" }}
            />
            <Button
              className="bg-[#D3175233] w-full rounded-md mb-2"
              style={{ color: "#D31752" }}
              onClick={() => removeJob(row.original?.id)}
            >
              Delete User
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
