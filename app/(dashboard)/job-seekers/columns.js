"use client";

export const columns = [
  {
    accessorKey: "PID",
    header: "PID",
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
    header: "Actions",
    cell: (data) => (
      <div className="flex items-center">
        <button onClick={() => handleViewDetails(data)}>View Details</button>
        <button onClick={() => handleDeleteUser(data)}>Delete User</button>
      </div>
    ),
  },
];
