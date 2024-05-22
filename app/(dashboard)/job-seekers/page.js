"use client";
import { Payment, columns } from "./columns";
import DataTable from "./data-table";

// Fetch data from your API here.
const data = [
  {
    PID: 1,
    Name: "John Doe",
    Ph_no_Watsapp: "1234567890",
    Nationality: "USA",
    Place_of_Residence: "New York",
    NOTTP: "Some Value",
  },
  {
    PID: 2,
    Name: "Jane Smith",
    Ph_no_Watsapp: "9876543210",
    Nationality: "Canada",
    Place_of_Residence: "Toronto",
    NOTTP: "Another Value",
  },
  // Add more objects as needed
];

function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DemoPage;
